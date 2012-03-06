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

		// 当前 部件
		private Component CurrentComponent = null;

		// 当前 材质名称
		private string CurrentMaterialName = String.Empty;

		// 部件列表
		List<Component> Components = new List<Component>();

		public Obj(string ObjFile)
		{
			this.ObjStream = new StreamReader(ObjFile);
			var MtlFile = ObjFile.Substring(0, ObjFile.Length - 3) + "mtl";
			if (File.Exists(MtlFile))
				this.MtlStream = new StreamReader(MtlFile);
		}

		private void Init()
		{
			string line = ObjStream.ReadLine();
			while (line != null)
			{
				if (line.StartsWith("# object ", true, null))
				{
					AddComponent(line.Substring(9, line.Length - 9).Trim());
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
		}

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
	}
}
