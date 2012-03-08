using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace obj2js.ObjData
{
	public class PointIndex
	{
		public int VertexIndex { get; set; }
		public int TextureCoordIndex { get; set; }
		public int VertexNormalIndex { get; set; }

		public PointIndex(int VertexIndex, int TextureCoordIndex, int VertexNormalIndex)
		{
			this.VertexIndex = VertexIndex;
			this.TextureCoordIndex = TextureCoordIndex;
			this.VertexNormalIndex = VertexNormalIndex;
		}

		public override bool Equals(object obj)
		{
			var other = obj as PointIndex;
			return other != null
				&& this.VertexIndex == other.VertexIndex
				&& this.TextureCoordIndex == other.TextureCoordIndex
				&& this.VertexNormalIndex == other.VertexNormalIndex;
		}
	}
}
