	attribute	vec3 aVertex;				// 顶点位置
	attribute	vec3 aNormal;				// 顶点法线
	attribute	vec3 aTexCoord;				// 纹理坐标
	attribute	int  aMaterialIndex;		// 材质索引

	uniform		mat4 uMVMatrix;				// 视图变换矩阵
	uniform		mat4 uPMatrix;				// 投影变换矩阵
	uniform		mat3 uNMatrix;				// 法线变换矩阵

	varying		vec3 vNormal;				// 传递到片断着色器的参数
	varying		vec4 vPosition;				// 传递到片断着色器的参数
	varying		vec3 vTexCoord;				// 传递到片断着色器的参数
	varying		int  vMaterialIndex;		// 传递到片断着色器的参数

	void main(void) 
	{
		vPosition		= uMVMatrix * vec4(aVertex, 1.0);
		vNormal			= uNMatrix * aNormal;
		vTexCoord		= aTexCoord;
		vMaterialIndex	= aMaterialIndex;
		gl_Position		= uPMatrix * vPosition;
	}
