using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class Color4
	{
		public float r { get; set; }
		public float g { get; set; }
		public float b { get; set; }
		public float a { get; set; }

		public Color4(float r, float g, float b, float a)
		{
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a;
		}

		public override bool Equals(object obj)
		{
			var other = obj as Color4;
			return other != null
				&& this.r == other.r
				&& this.g == other.g
				&& this.b == other.b
				&& this.a == other.a;
		}
	}
}
