using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class WebGLPoint
	{
		public string MaterialName { get; set; }
		public PointIndex Point { get; set; }

		public WebGLPoint(string MaterialName, PointIndex Point)
		{
			this.MaterialName = MaterialName;
			this.Point = Point;
		}

		public override bool Equals(object obj)
		{
			var other = obj as WebGLPoint;
			return other != null
				&& this.MaterialName == other.MaterialName
				&& this.Point.Equals(other.Point);
		}
	}
}
