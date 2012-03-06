using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class Component
	{
		public string Name { get; set; }

		// v: x,y,z
		public List<Tuple<float, float, float>> vertices = new List<Tuple<float, float, float>>();
		// vn: N x,y,z
		public List<Tuple<float, float, float>> vertexNormals = new List<Tuple<float, float, float>>();
		// vt: x,y,z
		public List<Tuple<float, float, float>> textureCoords = new List<Tuple<float, float, float>>();
		// f: MaterialName,A(vertex index, texture coord index,vertex normal index),B(),C()
		public List<Tuple<string, Tuple<int, int, int>, Tuple<int, int, int>, Tuple<int, int, int>>> faces = new List<Tuple<string, Tuple<int, int, int>, Tuple<int, int, int>, Tuple<int, int, int>>>();
	}
}
