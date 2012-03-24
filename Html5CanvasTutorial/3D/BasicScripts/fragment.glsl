	precision mediump float;

	varying		vec3 vNormal;				// 传递到片断着色器的参数
	varying		vec4 vPosition;				// 传递到片断着色器的参数
	varying		vec3 vTexCoord;				// 传递到片断着色器的参数
	varying		int  vMaterialIndex;		// 传递到片断着色器的参数
 

	struct Material 
	{
		vec4	Ambient = vec4(0.2, 0.2, 0.2, 1.0);		// 材质的环境颜色	[(0.2, 0.2, 0.2, 1.0)]
		vec4	Diffuse = vec4(0.8, 0.8, 0.8, 1.0);		// 材质的散射颜色	[(0.8, 0.8, 0.8, 1.0)]
		vec4	Specular = vec4(0.0, 0.0, 0.0, 1.0);	// 材质的镜面颜色	[(0.0, 0.0, 0.0, 1.0)]
		vec4	Emission = vec4(0.0, 0.0, 0.0, 1.0);	// 材质的发射颜色	[(0.0, 0.0, 0.0, 1.0)]
		float	Shinness = 0.0;							// 镜面反射指数		[0.0]
		sampler2D Sampler = 0;
	};

	struct Light
	{
		vec4	Ambient = vec4(0.0, 0.0, 0.0, 1.0);		// 环境光颜色		[(0.0, 0.0, 0.0, 1.0)]
		vec4	Diffuse = vec4(1.0, 1.0, 1.0, 1.0);		// 散射光颜色		[(1.0, 1.0, 1.0, 1.0)]
		vec4	Specular = vec4(1.0, 1.0, 1.0, 1.0);	// 镜面光颜色		[(1.0, 1.0, 1.0, 1.0)]
		vec4	Position = vec4(0.0, 0.0, 1.0, 0.0);	// 光源位置			[(0.0, 0.0, 1.0, 0.0)]
		vec3	Spot_Direction = vec3(0.0, 0.0, -1.0);	// 聚光方向矢量		[(0.0, 0.0, -1.0)]
		float	Spot_Exponent = 0.0;					// 聚光指数			[0.0]
		float	Spot_Cutoff= 180.0;						// 聚光截止角度		[180.0]
		float	Constant_Attenuation = 1.0;				// 常数衰减因子		[1.0]
		float	Liner_Attenuation = 0.0;				// 线性衰减因子		[0.0]
		float	Quadratic_Attenuation = 0.0;			// 二次衰减因子		[0.0]
	};

	uniform vec3 uCamera;	// 摄像机位置
	uniform	Material uMaterials[10];	// 材质列表
	uniform Light uLight[10];

	void main(void) 
	{
		vec3 result = vec3(0.0, 0.0, 0.0);
		
		for(int i = 0; i < uLight.length; i++)
		{
			result += ComputeColor(uCamera, vPosition, vNormal, uMaterials[vMaterialIndex], uLight[i]);
		}

		vec4 tempColor;

		tempColor = texture2D(uMaterials[vMaterialIndex].Sampler, vec2(vTexCoord.s, vTexCoord.t));

		gl_FragColor = vec4(tempColor.xyz * result, tempColor.w);
	}

	// C为摄像机位置
	// P为当前点位置
	// N为当前点法线
	// M为材质参数
	// L为光源参数
	vec3 ComputeColor(vec3 C, vec4 P, vec3 N, Material M, Light L)
	{
		vec3 result;

		if(L.Position.w == 0.0)
		{
			// 方向光源，不计算衰减，使用Phong光照模型进行计算
			vec3 LPn = normalize(L.Position);
			vec3 PC = C - P.xyz;
			vec3 PCn = normalize(PC);
			vec3 PRn = reflect(LPn, N);
			float cosAlpha = dot(PCn, PRn);
			float cosTheta = dot(N, PRn);
			float cosBeta = dot(LPn, normalize(L.Spot_Direction));

			result = L.Ambient.rgb * M.Ambient.rgb +
				L.Diffuse.rgb * M.Diffuse.rgb * cosTheta +
				L.Specular.rgb * M.Specular.rgb * pow(cosAlpha, M.Shinness);
		}
		else
		{
			// 点光源，需要计算衰减
			vec3 LP = P.xyz - L.Position.xyz;
			vec3 LPn = normalize(LP);
			vec3 PC = C - P.xyz;
			vec3 PCn = normalize(PC);
			vec3 PRn = reflect(LPn, N);
			float cosAlpha = dot(PCn, PRn);
			float cosTheta = dot(N, PRn);
			float cosBeta = dot(LPn, normalize(L.Spot_Direction));
			float d = length(LP);
			float fd = 1/(L.Constant_Attenuation + L.Liner_Attenuation * d + L.Quadratic_Attenuation * d * d);

			float Beta = degrees(acos(cosBeta));
			
			if(L.Spot_Cutoff == 180.0)
			{
				// 点光源，使用Phong光照模型进行计算
				result = L.Ambient.rgb * M.Ambient.rgb +
					fd * L.Diffuse.rgb * M.Diffuse.rgb * cosTheta +
					fd * L.Specular.rgb * M.Specular.rgb * pow(cosAlpha, M.Shinness);
			}
			else
			{
				// 聚光灯，使用Warn光照模型进行计算
				if(Beta > L.Spot_Cutoff)
				{
					// 在聚光灯照耀范围外
					result = L.Ambient.rgb * M.Ambient.rgb;
				}
				else
				{
					// 在聚光灯照耀范围内
					result = L.Ambient.rgb * M.Ambient.rgb +
						fd * pow(cosBeta, L.Spot_Exponent) * (L.Diffuse.rgb * M.Diffuse.rgb * cosTheta + L.Specular.rgb * M.Specular.rgb * pow(cosAlpha, M.Shinness));

				}
			}
		}

		return result;
	}
