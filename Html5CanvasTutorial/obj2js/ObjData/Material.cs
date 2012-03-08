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
		public Color4 Ambient { get; set; }
		// 漫反射 r,g,b,a
		public Color4 Diffuse { get; set; }
		// 镜面反射 r,g,b,a
		public Color4 Specular { get; set; }
		// 发射颜色 r,g,b,a
		public Color4 Emission { get; set; }
		// 镜面反射指数
		public float Shinness { get; set; }

		public string Map { get; set; }

		public override bool Equals(object obj)
		{
			var other = obj as Material;
			return other != null
				&& this.Name == other.Name
				&& this.Ambient.Equals(other.Ambient)
				&& this.Diffuse.Equals(other.Diffuse)
				&& this.Specular.Equals(other.Specular)
				&& this.Emission.Equals(other.Emission)
				&& this.Shinness == other.Shinness
				&& this.Map == other.Map;
		}
	}
}
