using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace obj2js.ObjData
{
	// 所有的index 为 1 开始
	public class Obj
	{
		// obj 文件
		private StreamReader ObjStream;

		// mtl 文件
		private StreamReader MtlStream;

		// obj 文件所在文件夹
		private string Path;

		// 当前 部件
		private Component CurrentComponent = null;

		// 当前 材质名称
		private string CurrentMaterialName = String.Empty;

		// 当前 材质名称
		private Material CurrentMaterial = null;

		// 部件列表
		List<Component> Components = new List<Component>();

		// 材质列表
		public List<Material> Materials = new List<Material>();


		public Obj(string ObjFile)
		{
			this.ObjStream = new StreamReader(ObjFile);
			this.Path = new FileInfo(ObjFile).DirectoryName;
			var MtlFile = ObjFile.Substring(0, ObjFile.Length - 3) + "mtl";
			if (File.Exists(MtlFile))
				this.MtlStream = new StreamReader(MtlFile);

			Init();
		}

		private void Init()
		{
			string line = this.ObjStream.ReadLine();
			while (line != null)
			{
				if (line.StartsWith("# object ", true, null))
				{
					AddComponent(line);
				}
				else if (line.StartsWith("v ", true, null))
				{
					AddVertix(line);
				}
				else if (line.StartsWith("vn ", true, null))
				{
					AddVertixNormal(line);
				}
				else if (line.StartsWith("vt ", true, null))
				{
					AddTextureCoord(line);
				}
				else if (line.StartsWith("usemtl ", true, null))
				{
					ChangeCurrentMaterial(line);
				}
				else if (line.StartsWith("f ", true, null))
				{
					AddFace(line);
				}

				line = ObjStream.ReadLine();
			}
			if (this.MtlStream != null)
			{
				line = this.MtlStream.ReadLine();
				while (line != null)
				{
					if (line.StartsWith("newmtl ", true, null))
					{
						AddMaterial(line);
					}
					else if (line.StartsWith("	Ka ", true, null))
					{
						InitAmbient(line);
					}
					else if (line.StartsWith("	Kd ", true, null))
					{
						InitDiffuse(line);
					}
					else if (line.StartsWith("	Ks ", true, null))
					{
						InitSpecular(line);
					}
					else if (line.StartsWith("	Ke ", true, null))
					{
						InitEmission(line);
					}
					else if (line.StartsWith("	Ns ", true, null))
					{
						InitShinness(line);
					}
					else if (line.StartsWith("	map_Kd ", true, null))
					{
						InitMap(line);
					}

					line = this.MtlStream.ReadLine();
				}
			}
		}

		#region Mtl
		private void InitMap(string line)
		{
			// "	map_Kd maps\Map__0_Wood.png"
			string Map = line.ToLower().Replace("	map_kd", "").Trim();
			this.CurrentMaterial.Map = Map;
		}

		private void InitShinness(string line)
		{
			// "	Ns 10.0000"
			string Shinness = line.ToLower().Replace("	ns", "").Trim();
			this.CurrentMaterial.Shinness = float.Parse(Shinness);
		}

		private void InitEmission(string line)
		{
			// "	Ke 0.5880 0.5880 0.5880"
			string[] rgba = line.ToLower().Replace("	ke", "").Trim().Split(' ');
			switch (rgba.Length)
			{
				case 1:
					this.CurrentMaterial.Emission = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Emission = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Emission = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Emission = new Tuple<float, float, float, float>(0.0f, 0.0f, 0.0f, 1.0f);
					break;
			}
		}

		private void InitSpecular(string line)
		{
			// "	Ks 0.5880 0.5880 0.5880"
			string[] rgba = line.ToLower().Replace("	ks", "").Trim().Split(' ');
			switch (rgba.Length)
			{
				case 1:
					this.CurrentMaterial.Specular = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Specular = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Specular = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Specular = new Tuple<float, float, float, float>(0.0f, 0.0f, 0.0f, 1.0f);
					break;
			}
		}

		private void InitDiffuse(string line)
		{
			// "	Kd 0.5880 0.5880 0.5880"
			string[] rgba = line.ToLower().Replace("	kd", "").Trim().Split(' ');
			switch (rgba.Length)
			{
				case 1:
					this.CurrentMaterial.Diffuse = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Diffuse = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Diffuse = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Diffuse = new Tuple<float, float, float, float>(0.8f, 0.8f, 0.8f, 1.0f);
					break;
			}
		}

		private void InitAmbient(string line)
		{
			// "	Ka 0.5880 0.5880 0.5880"
			string[] rgba = line.ToLower().Replace("	ka", "").Trim().Split(' ');
			switch (rgba.Length)
			{
				case 1:
					this.CurrentMaterial.Ambient = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Ambient = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Ambient = new Tuple<float, float, float, float>(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Ambient = new Tuple<float, float, float, float>(0.2f, 0.2f, 0.2f, 1.0f);
					break;
			}
		}

		private void AddMaterial(string line)
		{
			// "newmtl Material__23"
			var MaterialName = line.Substring(6, line.Length - 6).Trim();
			this.CurrentMaterial = new Material() { Name = MaterialName };
			this.Materials.Add(CurrentMaterial);
		}

		#endregion

		#region Obj
		private void AddFace(string line)
		{
			// "f 1/1/1 2/2/1 3/3/1"
			string[] abc = line.Replace("f", "").Trim().Split(new char[] { ' ', '/' });
			this.CurrentComponent.faces.Add(new Tuple<string, Tuple<int, int, int>, Tuple<int, int, int>, Tuple<int, int, int>>(this.CurrentMaterialName,
				new Tuple<int, int, int>(int.Parse(abc[0]), int.Parse(abc[1]), int.Parse(abc[2])),
				new Tuple<int, int, int>(int.Parse(abc[3]), int.Parse(abc[4]), int.Parse(abc[5])),
				new Tuple<int, int, int>(int.Parse(abc[6]), int.Parse(abc[7]), int.Parse(abc[8]))));
		}

		private void ChangeCurrentMaterial(string line)
		{
			// "usemtl Material__57"
			var MaterialName = line.Substring(6, line.Length - 6).Trim();
			this.CurrentMaterialName = MaterialName;
		}

		private void AddTextureCoord(string line)
		{
			// "vt 1.0000 1.0000 0.0000"
			string[] xyz = line.Replace("vt", "").Trim().Split(' ');
			this.CurrentComponent.textureCoords.Add(new Tuple<float, float, float>(float.Parse(xyz[0]), float.Parse(xyz[1]), float.Parse(xyz[2])));
		}

		private void AddVertixNormal(string line)
		{
			// "vn 0.0000 -1.0000 -0.0000"
			string[] xyz = line.Replace("vn", "").Trim().Split(' ');
			this.CurrentComponent.vertexNormals.Add(new Tuple<float, float, float>(float.Parse(xyz[0]), float.Parse(xyz[1]), float.Parse(xyz[2])));
		}

		private void AddVertix(string line)
		{
			// "v  11.7547 0.0000 -26.4473"
			string[] xyz = line.Replace("v", "").Trim().Split(' ');
			this.CurrentComponent.vertices.Add(new Tuple<float, float, float>(float.Parse(xyz[0]), float.Parse(xyz[1]), float.Parse(xyz[2])));
		}

		private void AddComponent(string line)
		{
			// "# object Box001"
			var ComponentName = line.Substring(9, line.Length - 9).Trim();
			this.CurrentComponent = new Component() { Name = ComponentName };
			this.CurrentMaterialName = String.Empty;
			this.Components.Add(CurrentComponent);
		}
		#endregion

		public void CreateJson()
		{
			// {"model":[{"component":{"vertices":[],"vertexNormals":[],"textureCoords":[],"indices":[],"materialIndices":[],"materials":[]}},{}] }
			
			foreach (var component in this.Components)
			{
				List<float> vertices = new List<float>();
				List<float> vertexNormals = new List<float>();
				List<float> textureCoords = new List<float>();
				List<int> indices = new List<int>();
				List<float> materialIndices = new List<float>();
				List<string> materials = new List<string>();
				int i = 0;

				foreach (var face in component.faces)
				{
					var tempv = component.vertices[face.Item2.Item1 - 1];
					vertices.Add(tempv.Item1);
					vertices.Add(tempv.Item2);
					vertices.Add(tempv.Item3);

					var tempt = component.textureCoords[face.Item2.Item2 - 1];
					textureCoords.Add(tempt.Item1);
					textureCoords.Add(tempt.Item2);
					textureCoords.Add(tempt.Item3);

					var tempn = component.vertexNormals[face.Item2.Item3 - 1];
					vertexNormals.Add(tempn.Item1);
					vertexNormals.Add(tempn.Item2);
					vertexNormals.Add(tempn.Item3);

					indices.Add(i);
					i++;

					tempv = component.vertices[face.Item3.Item1 - 1];
					vertices.Add(tempv.Item1);
					vertices.Add(tempv.Item2);
					vertices.Add(tempv.Item3);

					tempt = component.textureCoords[face.Item3.Item2 - 1];
					textureCoords.Add(tempt.Item1);
					textureCoords.Add(tempt.Item2);
					textureCoords.Add(tempt.Item3);

					tempn = component.vertexNormals[face.Item3.Item3 - 1];
					vertexNormals.Add(tempn.Item1);
					vertexNormals.Add(tempn.Item2);
					vertexNormals.Add(tempn.Item3);

					indices.Add(i);
					i++;

					tempv = component.vertices[face.Item4.Item1 - 1];
					vertices.Add(tempv.Item1);
					vertices.Add(tempv.Item2);
					vertices.Add(tempv.Item3);

					tempt = component.textureCoords[face.Item4.Item2 - 1];
					textureCoords.Add(tempt.Item1);
					textureCoords.Add(tempt.Item2);
					textureCoords.Add(tempt.Item3);

					tempn = component.vertexNormals[face.Item4.Item3 - 1];
					vertexNormals.Add(tempn.Item1);
					vertexNormals.Add(tempn.Item2);
					vertexNormals.Add(tempn.Item3);

					indices.Add(i);
					i++;

					if (!String.IsNullOrEmpty(face.Item1))
					{
						//Materials.Where(p=>p.Name == face.Item1).Select(p=>p.)
					}
					else
					{
						materialIndices.Add(-1.0f);
						materialIndices.Add(-1.0f);
						materialIndices.Add(-1.0f);
					}
				}
			}
		}
	}
}
