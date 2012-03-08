using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using obj2js.ObjData;

namespace obj2js
{
	/// <summary>
	/// MainWindow.xaml 的交互逻辑
	/// </summary>
	public partial class MainWindow : Window
	{
		public MainWindow()
		{
			InitializeComponent();
		}

		private void button1_Click(object sender, RoutedEventArgs e)
		{
			Point3D a = new Point3D(1.0f, 2.0f, 3.0f);
			Point3D b = new Point3D(1.0f, 2.0f, 3.0f);
			if (a.Equals(b))
				MessageBox.Show("==");
			else
				MessageBox.Show("!=");
		}
	}
}
