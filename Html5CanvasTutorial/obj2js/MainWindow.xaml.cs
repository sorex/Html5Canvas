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
using Microsoft.Win32;

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

		private void btnBrowseObj_Click(object sender, RoutedEventArgs e)
		{
			// Configure open file dialog box
			Microsoft.Win32.OpenFileDialog dlg = new Microsoft.Win32.OpenFileDialog();
			dlg.FileName = "Document"; // Default file name
			dlg.DefaultExt = ".obj"; // Default file extension
			dlg.Filter = "obj documents (.obj)|*.obj"; // Filter files by extension

			// Show open file dialog box
			Nullable<bool> result = dlg.ShowDialog();

			// Process open file dialog box results
			if (result == true)
			{
				// Open document
				this.textBox1.Text = dlg.FileName;
			}
		}

		private void button1_Click(object sender, RoutedEventArgs e)
		{
			ObjData.Obj obj = new Obj(this.textBox1.Text);
			obj.CurrentModel.Init();
			this.textBox4.Text = obj.CurrentModel.Json();
		}

	}
}
