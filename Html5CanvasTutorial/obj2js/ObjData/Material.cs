using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class Material
	{
		public String Name { get; set; }

		// 环境颜色 r,g,b,a
		public Tuple<float, float, float, float> Ambient { get; set; }
		// 漫反射 r,g,b,a
		public Tuple<float, float, float, float> Diffuse { get; set; }
		// 镜面反射 r,g,b,a
		public Tuple<float, float, float, float> Specular { get; set; }
		// 发射颜色 r,g,b,a
		public Tuple<float, float, float, float> Emission { get; set; }
		// 镜面反射指数
		public float Shinness { get; set; }

		public string Map { get; set; }
	}
}
