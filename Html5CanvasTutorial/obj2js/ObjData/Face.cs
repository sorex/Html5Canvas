using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class Face
	{
		public string MaterialName { get; set; }
		public PointIndex A { get; set; }
		public PointIndex B { get; set; }
		public PointIndex C { get; set; }

		public Face(string MaterialName, PointIndex A, PointIndex B, PointIndex C)
		{
			this.MaterialName = MaterialName;
			this.A = A;
			this.B = B;
			this.C = C;
		}

		public override bool Equals(object obj)
		{
			var other = obj as Face;
			return other != null
				&& this.MaterialName == other.MaterialName
				&& this.A.Equals(other.A)
				&& this.B.Equals(other.B)
				&& this.C.Equals(other.C);
		}
	}
}
