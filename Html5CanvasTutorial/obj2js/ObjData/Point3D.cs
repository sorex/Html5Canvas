using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class Point3D
	{
		public float x { get; set; }
		public float y { get; set; }
		public float z { get; set; }

		public Point3D(float x, float y, float z)
		{
			this.x = x;
			this.y = y;
			this.z = z;
		}

		public override bool Equals(object obj)
		{
			var other = obj as Point3D;
			return other != null 
				&& this.x == other.x 
				&& this.y == other.y 
				&& this.z == other.z;
		}
	}
}
