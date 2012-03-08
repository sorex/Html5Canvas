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

		// 当前 模型
		private Model CurrentModel = new Model();

		// 当前 材质名称
		private string CurrentMaterialName = String.Empty;

		// 当前 材质
		private Material CurrentMaterial = null;

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
					NewComponent(line);
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
					this.CurrentMaterial.Emission = new Color4(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Emission = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Emission = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Emission = new Color4(0.0f, 0.0f, 0.0f, 1.0f);
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
					this.CurrentMaterial.Specular = new Color4(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Specular = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Specular = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Specular = new Color4(0.0f, 0.0f, 0.0f, 1.0f);
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
					this.CurrentMaterial.Diffuse = new Color4(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Diffuse = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Diffuse = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Diffuse = new Color4(0.8f, 0.8f, 0.8f, 1.0f);
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
					this.CurrentMaterial.Ambient = new Color4(float.Parse(rgba[0]), float.Parse(rgba[0]), float.Parse(rgba[0]), 1.0f);
					break;
				case 3:
					this.CurrentMaterial.Ambient = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), 1.0f);
					break;
				case 4:
					this.CurrentMaterial.Ambient = new Color4(float.Parse(rgba[0]), float.Parse(rgba[1]), float.Parse(rgba[2]), float.Parse(rgba[3]));
					break;
				default:
					this.CurrentMaterial.Ambient = new Color4(0.2f, 0.2f, 0.2f, 1.0f);
					break;
			}
		}

		private void AddMaterial(string line)
		{
			// "newmtl Material__23"
			var MaterialName = line.Substring(6, line.Length - 6).Trim();
			this.CurrentMaterial = new Material() { Name = MaterialName };
			this.CurrentModel.Materials.Add(CurrentMaterial);
		}

		#endregion

		#region Obj
		private void AddFace(string line)
		{
			// "f 1/1/1 2/2/1 3/3/1"
			string[] abc = line.Replace("f", "").Trim().Split(new char[] { ' ', '/' });
			this.CurrentModel.Faces.Add(new Face(this.CurrentMaterialName,
				new PointIndex(int.Parse(abc[0]), int.Parse(abc[1]), int.Parse(abc[2])),
				new PointIndex(int.Parse(abc[3]), int.Parse(abc[4]), int.Parse(abc[5])),
				new PointIndex(int.Parse(abc[6]), int.Parse(abc[7]), int.Parse(abc[8]))));
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
			this.CurrentModel.TextureCoords.Add(new Point3D(float.Parse(xyz[0]), float.Parse(xyz[1]), float.Parse(xyz[2])));
		}

		private void AddVertixNormal(string line)
		{
			// "vn 0.0000 -1.0000 -0.0000"
			string[] xyz = line.Replace("vn", "").Trim().Split(' ');
			this.CurrentModel.VertexNormals.Add(new Point3D(float.Parse(xyz[0]), float.Parse(xyz[1]), float.Parse(xyz[2])));
		}

		private void AddVertix(string line)
		{
			// "v  11.7547 0.0000 -26.4473"
			string[] xyz = line.Replace("v", "").Trim().Split(' ');
			this.CurrentModel.Vertices.Add(new Point3D(float.Parse(xyz[0]), float.Parse(xyz[1]), float.Parse(xyz[2])));
		}

		private void NewComponent(string line)
		{
			// "# object Box001"
			this.CurrentMaterialName = String.Empty;
		}
		#endregion

		public void CreateJson()
		{
			// {"model":[{"component":{"vertices":[],"vertexNormals":[],"textureCoords":[],"indices":[],"materialIndices":[],"materials":[]}},{}] }

			//List<float> vertices = new List<float>();
			//List<float> vertexNormals = new List<float>();
			//List<float> textureCoords = new List<float>();
			//List<int> indices = new List<int>();
			//List<float> materialIndices = new List<float>();
			//List<string> materials = new List<string>();
			//int i = 0;

			//List<Tuple<string, int, int, int>> points = new List<Tuple<string, int, int, int>>();
			//foreach (var face in this.CurrentModel.Faces)
			//{
			//    if (points.Count(p => p.Item1 == face.Item1 && p.Item2 == face.Item2.Item1 && p.Item3 == face.Item2.Item2 && p.Item4 == face.Item2.Item3) == 0)
			//        points.Add(new Tuple<string, int, int, int>(face.Item1, face.Item2.Item1, face.Item2.Item2, face.Item2.Item3));
			//    if (points.Count(p => p.Item1 == face.Item1 && p.Item2 == face.Item3.Item1 && p.Item3 == face.Item3.Item2 && p.Item4 == face.Item3.Item3) == 0)
			//        points.Add(new Tuple<string, int, int, int>(face.Item1, face.Item3.Item1, face.Item3.Item2, face.Item3.Item3));
			//    if (points.Count(p => p.Item1 == face.Item1 && p.Item2 == face.Item4.Item1 && p.Item3 == face.Item4.Item2 && p.Item4 == face.Item4.Item3) == 0)
			//        points.Add(new Tuple<string, int, int, int>(face.Item1, face.Item4.Item1, face.Item4.Item2, face.Item4.Item3));
			//}

			//foreach (var point in points)
			//{

			//}

		}
	}
}
