using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class Model
	{
		public string Name { get; set; }

		// v: x,y,z
		public List<Point3D> Vertices = new List<Point3D>();
		// vn: N x,y,z
		public List<Point3D> VertexNormals = new List<Point3D>();
		// vt: x,y,z
		public List<Point3D> TextureCoords = new List<Point3D>();
		// f: MaterialName,A(vertex index, texture coord index,vertex normal index),B(),C()
		public List<Face> Faces = new List<Face>();

		public List<Material> Materials = new List<Material>();


		private List<WebGLPoint> WebGLPoints = new List<WebGLPoint>();
		private List<float> WebGLVertices = new List<float>();
		private List<float> WebGLVertexNormals = new List<float>();
		private List<float> WebGLTextureCoords = new List<float>();
		private List<float> WebGLMaterialIndices = new List<float>();
		private List<int> WebGLIndices = new List<int>();

		public void Init()
		{
			foreach (var face in Faces)
			{
				if (WebGLPoints.Count(p => p.MaterialName == face.MaterialName && p.Point.Equals(face.A)) == 0)
				{
					WebGLPoints.Add(new WebGLPoint(face.MaterialName, new PointIndex(face.A.VertexIndex, face.A.TextureCoordIndex, face.A.VertexNormalIndex)));
					WebGLIndices.Add(WebGLPoints.Count - 1);
				}
				else
				{
					WebGLIndices.Add(WebGLPoints.FindIndex(p => p.MaterialName == face.MaterialName && p.Point.Equals(face.A)));
				}

				if (WebGLPoints.Count(p => p.MaterialName == face.MaterialName && p.Point.Equals(face.B)) == 0)
				{
					WebGLPoints.Add(new WebGLPoint(face.MaterialName, new PointIndex(face.B.VertexIndex, face.B.TextureCoordIndex, face.B.VertexNormalIndex)));
					WebGLIndices.Add(WebGLPoints.Count - 1);
				}
				else
				{
					WebGLIndices.Add(WebGLPoints.FindIndex(p => p.MaterialName == face.MaterialName && p.Point.Equals(face.B)));
				}

				if (WebGLPoints.Count(p => p.MaterialName == face.MaterialName && p.Point.Equals(face.C)) == 0)
				{
					WebGLPoints.Add(new WebGLPoint(face.MaterialName, new PointIndex(face.C.VertexIndex, face.C.TextureCoordIndex, face.C.VertexNormalIndex)));
					WebGLIndices.Add(WebGLPoints.Count - 1);
				}
				else
				{
					WebGLIndices.Add(WebGLPoints.FindIndex(p => p.MaterialName == face.MaterialName && p.Point.Equals(face.C)));
				}
			}

			foreach (var point in WebGLPoints)
			{
				var v = Vertices[point.Point.VertexIndex - 1];
				var n = VertexNormals[point.Point.VertexNormalIndex - 1];
				var t = TextureCoords[point.Point.TextureCoordIndex - 1];
				// TODO: 完成WebGL需要的数据

				WebGLVertices.Add(v.x);
				WebGLVertices.Add(v.y);
				WebGLVertices.Add(v.z);

				WebGLVertexNormals.Add(n.x);
				WebGLVertexNormals.Add(n.y);
				WebGLVertexNormals.Add(n.z);

				WebGLTextureCoords.Add(t.x);
				WebGLTextureCoords.Add(t.y);
				WebGLTextureCoords.Add(t.z);

				WebGLMaterialIndices.Add(Materials.FindIndex(p => p.Name == point.MaterialName));
			}
		}

		public string Json()
		{
			var data = new
			{
				vertices = WebGLVertices,
				vertexNormals = WebGLVertexNormals,
				textureCoords = WebGLTextureCoords,
				materialIndices = WebGLMaterialIndices,
				indices = WebGLIndices
			};

			return Newtonsoft.Json.JsonConvert.SerializeObject(data);
		}
	}
}
