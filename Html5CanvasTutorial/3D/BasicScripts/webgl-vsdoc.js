function WebGLRenderingContext() {
	/// <summary>WebGLRenderingContext</summary>
	/// <field name="DEPTH_BUFFER_BIT" type="GLenum">DEPTH_BUFFER_BIT</field>
	/// <field name="STENCIL_BUFFER_BIT" type="GLenum">STENCIL_BUFFER_BIT</field>
	/// <field name="COLOR_BUFFER_BIT" type="GLenum">COLOR_BUFFER_BIT</field>
	/// <field name="POINTS" type="GLenum">POINTS</field>
	/// <field name="LINES" type="GLenum">LINES</field>
	/// <field name="LINE_LOOP" type="GLenum">LINE_LOOP</field>
	/// <field name="LINE_STRIP" type="GLenum">LINE_STRIP</field>
	/// <field name="TRIANGLES" type="GLenum">TRIANGLES</field>
	/// <field name="TRIANGLE_STRIP" type="GLenum">TRIANGLE_STRIP</field>
	/// <field name="TRIANGLE_FAN" type="GLenum">TRIANGLE_FAN</field>
	/// <field name="ZERO" type="GLenum">ZERO</field>
	/// <field name="ONE" type="GLenum">ONE</field>
	/// <field name="SRC_COLOR" type="GLenum">SRC_COLOR</field>
	/// <field name="ONE_MINUS_SRC_COLOR" type="GLenum">ONE_MINUS_SRC_COLOR</field>
	/// <field name="SRC_ALPHA" type="GLenum">SRC_ALPHA</field>
	/// <field name="ONE_MINUS_SRC_ALPHA" type="GLenum">ONE_MINUS_SRC_ALPHA</field>
	/// <field name="DST_ALPHA" type="GLenum">DST_ALPHA</field>
	/// <field name="ONE_MINUS_DST_ALPHA" type="GLenum">ONE_MINUS_DST_ALPHA</field>
	/// <field name="DST_COLOR" type="GLenum">DST_COLOR</field>
	/// <field name="ONE_MINUS_DST_COLOR" type="GLenum">ONE_MINUS_DST_COLOR</field>
	/// <field name="SRC_ALPHA_SATURATE" type="GLenum">SRC_ALPHA_SATURATE</field>
	/// <field name="FUNC_ADD" type="GLenum">FUNC_ADD</field>
	/// <field name="BLEND_EQUATION" type="GLenum">BLEND_EQUATION</field>
	/// <field name="BLEND_EQUATION_RGB" type="GLenum">BLEND_EQUATION_RGB</field>
	/// <field name="BLEND_EQUATION_ALPHA" type="GLenum">BLEND_EQUATION_ALPHA</field>
	/// <field name="FUNC_SUBTRACT" type="GLenum">FUNC_SUBTRACT</field>
	/// <field name="FUNC_REVERSE_SUBTRACT" type="GLenum">FUNC_REVERSE_SUBTRACT</field>
	/// <field name="BLEND_DST_RGB" type="GLenum">BLEND_DST_RGB</field>
	/// <field name="BLEND_SRC_RGB" type="GLenum">BLEND_SRC_RGB</field>
	/// <field name="BLEND_DST_ALPHA" type="GLenum">BLEND_DST_ALPHA</field>
	/// <field name="BLEND_SRC_ALPHA" type="GLenum">BLEND_SRC_ALPHA</field>
	/// <field name="CONSTANT_COLOR" type="GLenum">CONSTANT_COLOR</field>
	/// <field name="ONE_MINUS_CONSTANT_COLOR" type="GLenum">ONE_MINUS_CONSTANT_COLOR</field>
	/// <field name="CONSTANT_ALPHA" type="GLenum">CONSTANT_ALPHA</field>
	/// <field name="ONE_MINUS_CONSTANT_ALPHA" type="GLenum">ONE_MINUS_CONSTANT_ALPHA</field>
	/// <field name="BLEND_COLOR" type="GLenum">BLEND_COLOR</field>
	/// <field name="ARRAY_BUFFER" type="GLenum">ARRAY_BUFFER</field>
	/// <field name="ELEMENT_ARRAY_BUFFER" type="GLenum">ELEMENT_ARRAY_BUFFER</field>
	/// <field name="ARRAY_BUFFER_BINDING" type="GLenum">ARRAY_BUFFER_BINDING</field>
	/// <field name="ELEMENT_ARRAY_BUFFER_BINDING" type="GLenum">ELEMENT_ARRAY_BUFFER_BINDING</field>
	/// <field name="STREAM_DRAW" type="GLenum">STREAM_DRAW</field>
	/// <field name="STATIC_DRAW" type="GLenum">STATIC_DRAW</field>
	/// <field name="DYNAMIC_DRAW" type="GLenum">DYNAMIC_DRAW</field>
	/// <field name="BUFFER_SIZE" type="GLenum">BUFFER_SIZE</field>
	/// <field name="BUFFER_USAGE" type="GLenum">BUFFER_USAGE</field>
	/// <field name="CURRENT_VERTEX_ATTRIB" type="GLenum">CURRENT_VERTEX_ATTRIB</field>
	/// <field name="FRONT" type="GLenum">FRONT</field>
	/// <field name="BACK" type="GLenum">BACK</field>
	/// <field name="FRONT_AND_BACK" type="GLenum">FRONT_AND_BACK</field>
	/// <field name="TEXTURE_2D" type="GLenum">TEXTURE_2D</field>
	/// <field name="CULL_FACE" type="GLenum">CULL_FACE</field>
	/// <field name="BLEND" type="GLenum">BLEND</field>
	/// <field name="DITHER" type="GLenum">DITHER</field>
	/// <field name="STENCIL_TEST" type="GLenum">STENCIL_TEST</field>
	/// <field name="DEPTH_TEST" type="GLenum">DEPTH_TEST</field>
	/// <field name="SCISSOR_TEST" type="GLenum">SCISSOR_TEST</field>
	/// <field name="POLYGON_OFFSET_FILL" type="GLenum">POLYGON_OFFSET_FILL</field>
	/// <field name="SAMPLE_ALPHA_TO_COVERAGE" type="GLenum">SAMPLE_ALPHA_TO_COVERAGE</field>
	/// <field name="SAMPLE_COVERAGE" type="GLenum">SAMPLE_COVERAGE</field>
	/// <field name="NO_ERROR" type="GLenum">NO_ERROR</field>
	/// <field name="INVALID_ENUM" type="GLenum">INVALID_ENUM</field>
	/// <field name="INVALID_VALUE" type="GLenum">INVALID_VALUE</field>
	/// <field name="INVALID_OPERATION" type="GLenum">INVALID_OPERATION</field>
	/// <field name="OUT_OF_MEMORY" type="GLenum">OUT_OF_MEMORY</field>
	/// <field name="CW" type="GLenum">CW</field>
	/// <field name="CCW" type="GLenum">CCW</field>
	/// <field name="LINE_WIDTH" type="GLenum">LINE_WIDTH</field>
	/// <field name="ALIASED_POINT_SIZE_RANGE" type="GLenum">ALIASED_POINT_SIZE_RANGE</field>
	/// <field name="ALIASED_LINE_WIDTH_RANGE" type="GLenum">ALIASED_LINE_WIDTH_RANGE</field>
	/// <field name="CULL_FACE_MODE" type="GLenum">CULL_FACE_MODE</field>
	/// <field name="FRONT_FACE" type="GLenum">FRONT_FACE</field>
	/// <field name="DEPTH_RANGE" type="GLenum">DEPTH_RANGE</field>
	/// <field name="DEPTH_WRITEMASK" type="GLenum">DEPTH_WRITEMASK</field>
	/// <field name="DEPTH_CLEAR_VALUE" type="GLenum">DEPTH_CLEAR_VALUE</field>
	/// <field name="DEPTH_FUNC" type="GLenum">DEPTH_FUNC</field>
	/// <field name="STENCIL_CLEAR_VALUE" type="GLenum">STENCIL_CLEAR_VALUE</field>
	/// <field name="STENCIL_FUNC" type="GLenum">STENCIL_FUNC</field>
	/// <field name="STENCIL_FAIL" type="GLenum">STENCIL_FAIL</field>
	/// <field name="STENCIL_PASS_DEPTH_FAIL" type="GLenum">STENCIL_PASS_DEPTH_FAIL</field>
	/// <field name="STENCIL_PASS_DEPTH_PASS" type="GLenum">STENCIL_PASS_DEPTH_PASS</field>
	/// <field name="STENCIL_REF" type="GLenum">STENCIL_REF</field>
	/// <field name="STENCIL_VALUE_MASK" type="GLenum">STENCIL_VALUE_MASK</field>
	/// <field name="STENCIL_WRITEMASK" type="GLenum">STENCIL_WRITEMASK</field>
	/// <field name="STENCIL_BACK_FUNC" type="GLenum">STENCIL_BACK_FUNC</field>
	/// <field name="STENCIL_BACK_FAIL" type="GLenum">STENCIL_BACK_FAIL</field>
	/// <field name="STENCIL_BACK_PASS_DEPTH_FAIL" type="GLenum">STENCIL_BACK_PASS_DEPTH_FAIL</field>
	/// <field name="STENCIL_BACK_PASS_DEPTH_PASS" type="GLenum">STENCIL_BACK_PASS_DEPTH_PASS</field>
	/// <field name="STENCIL_BACK_REF" type="GLenum">STENCIL_BACK_REF</field>
	/// <field name="STENCIL_BACK_VALUE_MASK" type="GLenum">STENCIL_BACK_VALUE_MASK</field>
	/// <field name="STENCIL_BACK_WRITEMASK" type="GLenum">STENCIL_BACK_WRITEMASK</field>
	/// <field name="VIEWPORT" type="GLenum">VIEWPORT</field>
	/// <field name="SCISSOR_BOX" type="GLenum">SCISSOR_BOX</field>
	/// <field name="COLOR_CLEAR_VALUE" type="GLenum">COLOR_CLEAR_VALUE</field>
	/// <field name="COLOR_WRITEMASK" type="GLenum">COLOR_WRITEMASK</field>
	/// <field name="UNPACK_ALIGNMENT" type="GLenum">UNPACK_ALIGNMENT</field>
	/// <field name="PACK_ALIGNMENT" type="GLenum">PACK_ALIGNMENT</field>
	/// <field name="MAX_TEXTURE_SIZE" type="GLenum">MAX_TEXTURE_SIZE</field>
	/// <field name="MAX_VIEWPORT_DIMS" type="GLenum">MAX_VIEWPORT_DIMS</field>
	/// <field name="SUBPIXEL_BITS" type="GLenum">SUBPIXEL_BITS</field>
	/// <field name="RED_BITS" type="GLenum">RED_BITS</field>
	/// <field name="GREEN_BITS" type="GLenum">GREEN_BITS</field>
	/// <field name="BLUE_BITS" type="GLenum">BLUE_BITS</field>
	/// <field name="ALPHA_BITS" type="GLenum">ALPHA_BITS</field>
	/// <field name="DEPTH_BITS" type="GLenum">DEPTH_BITS</field>
	/// <field name="STENCIL_BITS" type="GLenum">STENCIL_BITS</field>
	/// <field name="POLYGON_OFFSET_UNITS" type="GLenum">POLYGON_OFFSET_UNITS</field>
	/// <field name="POLYGON_OFFSET_FACTOR" type="GLenum">POLYGON_OFFSET_FACTOR</field>
	/// <field name="TEXTURE_BINDING_2D" type="GLenum">TEXTURE_BINDING_2D</field>
	/// <field name="SAMPLE_BUFFERS" type="GLenum">SAMPLE_BUFFERS</field>
	/// <field name="SAMPLES" type="GLenum">SAMPLES</field>
	/// <field name="SAMPLE_COVERAGE_VALUE" type="GLenum">SAMPLE_COVERAGE_VALUE</field>
	/// <field name="SAMPLE_COVERAGE_INVERT" type="GLenum">SAMPLE_COVERAGE_INVERT</field>
	/// <field name="NUM_COMPRESSED_TEXTURE_FORMATS" type="GLenum">NUM_COMPRESSED_TEXTURE_FORMATS</field>
	/// <field name="COMPRESSED_TEXTURE_FORMATS" type="GLenum">COMPRESSED_TEXTURE_FORMATS</field>
	/// <field name="DONT_CARE" type="GLenum">DONT_CARE</field>
	/// <field name="FASTEST" type="GLenum">FASTEST</field>
	/// <field name="NICEST" type="GLenum">NICEST</field>
	/// <field name="GENERATE_MIPMAP_HINT" type="GLenum">GENERATE_MIPMAP_HINT</field>
	/// <field name="BYTE" type="GLenum">BYTE</field>
	/// <field name="UNSIGNED_BYTE" type="GLenum">UNSIGNED_BYTE</field>
	/// <field name="SHORT" type="GLenum">SHORT</field>
	/// <field name="UNSIGNED_SHORT" type="GLenum">UNSIGNED_SHORT</field>
	/// <field name="INT" type="GLenum">INT</field>
	/// <field name="UNSIGNED_INT" type="GLenum">UNSIGNED_INT</field>
	/// <field name="FLOAT" type="GLenum">FLOAT</field>
	/// <field name="DEPTH_COMPONENT" type="GLenum">DEPTH_COMPONENT</field>
	/// <field name="ALPHA" type="GLenum">ALPHA</field>
	/// <field name="RGB" type="GLenum">RGB</field>
	/// <field name="RGBA" type="GLenum">RGBA</field>
	/// <field name="LUMINANCE" type="GLenum">LUMINANCE</field>
	/// <field name="LUMINANCE_ALPHA" type="GLenum">LUMINANCE_ALPHA</field>
	/// <field name="UNSIGNED_SHORT_4_4_4_4" type="GLenum">UNSIGNED_SHORT_4_4_4_4</field>
	/// <field name="UNSIGNED_SHORT_5_5_5_1" type="GLenum">UNSIGNED_SHORT_5_5_5_1</field>
	/// <field name="UNSIGNED_SHORT_5_6_5" type="GLenum">UNSIGNED_SHORT_5_6_5</field>
	/// <field name="FRAGMENT_SHADER" type="GLenum">FRAGMENT_SHADER</field>
	/// <field name="VERTEX_SHADER" type="GLenum">VERTEX_SHADER</field>
	/// <field name="MAX_VERTEX_ATTRIBS" type="GLenum">MAX_VERTEX_ATTRIBS</field>
	/// <field name="MAX_VERTEX_UNIFORM_VECTORS" type="GLenum">MAX_VERTEX_UNIFORM_VECTORS</field>
	/// <field name="MAX_VARYING_VECTORS" type="GLenum">MAX_VARYING_VECTORS</field>
	/// <field name="MAX_COMBINED_TEXTURE_IMAGE_UNITS" type="GLenum">MAX_COMBINED_TEXTURE_IMAGE_UNITS</field>
	/// <field name="MAX_VERTEX_TEXTURE_IMAGE_UNITS" type="GLenum">MAX_VERTEX_TEXTURE_IMAGE_UNITS</field>
	/// <field name="MAX_TEXTURE_IMAGE_UNITS" type="GLenum">MAX_TEXTURE_IMAGE_UNITS</field>
	/// <field name="MAX_FRAGMENT_UNIFORM_VECTORS" type="GLenum">MAX_FRAGMENT_UNIFORM_VECTORS</field>
	/// <field name="SHADER_TYPE" type="GLenum">SHADER_TYPE</field>
	/// <field name="DELETE_STATUS" type="GLenum">DELETE_STATUS</field>
	/// <field name="LINK_STATUS" type="GLenum">LINK_STATUS</field>
	/// <field name="VALIDATE_STATUS" type="GLenum">VALIDATE_STATUS</field>
	/// <field name="ATTACHED_SHADERS" type="GLenum">ATTACHED_SHADERS</field>
	/// <field name="ACTIVE_UNIFORMS" type="GLenum">ACTIVE_UNIFORMS</field>
	/// <field name="ACTIVE_UNIFORM_MAX_LENGTH" type="GLenum">ACTIVE_UNIFORM_MAX_LENGTH</field>
	/// <field name="ACTIVE_ATTRIBUTES" type="GLenum">ACTIVE_ATTRIBUTES</field>
	/// <field name="ACTIVE_ATTRIBUTE_MAX_LENGTH" type="GLenum">ACTIVE_ATTRIBUTE_MAX_LENGTH</field>
	/// <field name="SHADING_LANGUAGE_VERSION" type="GLenum">SHADING_LANGUAGE_VERSION</field>
	/// <field name="CURRENT_PROGRAM" type="GLenum">CURRENT_PROGRAM</field>
	/// <field name="NEVER" type="GLenum">NEVER</field>
	/// <field name="LESS" type="GLenum">LESS</field>
	/// <field name="EQUAL" type="GLenum">EQUAL</field>
	/// <field name="LEQUAL" type="GLenum">LEQUAL</field>
	/// <field name="GREATER" type="GLenum">GREATER</field>
	/// <field name="NOTEQUAL" type="GLenum">NOTEQUAL</field>
	/// <field name="GEQUAL" type="GLenum">GEQUAL</field>
	/// <field name="ALWAYS" type="GLenum">ALWAYS</field>
	/// <field name="KEEP" type="GLenum">KEEP</field>
	/// <field name="REPLACE" type="GLenum">REPLACE</field>
	/// <field name="INCR" type="GLenum">INCR</field>
	/// <field name="DECR" type="GLenum">DECR</field>
	/// <field name="INVERT" type="GLenum">INVERT</field>
	/// <field name="INCR_WRAP" type="GLenum">INCR_WRAP</field>
	/// <field name="DECR_WRAP" type="GLenum">DECR_WRAP</field>
	/// <field name="VENDOR" type="GLenum">VENDOR</field>
	/// <field name="RENDERER" type="GLenum">RENDERER</field>
	/// <field name="VERSION" type="GLenum">VERSION</field>
	/// <field name="NEAREST" type="GLenum">NEAREST</field>
	/// <field name="LINEAR" type="GLenum">LINEAR</field>
	/// <field name="NEAREST_MIPMAP_NEAREST" type="GLenum">NEAREST_MIPMAP_NEAREST</field>
	/// <field name="LINEAR_MIPMAP_NEAREST" type="GLenum">LINEAR_MIPMAP_NEAREST</field>
	/// <field name="NEAREST_MIPMAP_LINEAR" type="GLenum">NEAREST_MIPMAP_LINEAR</field>
	/// <field name="LINEAR_MIPMAP_LINEAR" type="GLenum">LINEAR_MIPMAP_LINEAR</field>
	/// <field name="TEXTURE_MAG_FILTER" type="GLenum">TEXTURE_MAG_FILTER</field>
	/// <field name="TEXTURE_MIN_FILTER" type="GLenum">TEXTURE_MIN_FILTER</field>
	/// <field name="TEXTURE_WRAP_S" type="GLenum">TEXTURE_WRAP_S</field>
	/// <field name="TEXTURE_WRAP_T" type="GLenum">TEXTURE_WRAP_T</field>
	/// <field name="TEXTURE" type="GLenum">TEXTURE</field>
	/// <field name="TEXTURE_CUBE_MAP" type="GLenum">TEXTURE_CUBE_MAP</field>
	/// <field name="TEXTURE_BINDING_CUBE_MAP" type="GLenum">TEXTURE_BINDING_CUBE_MAP</field>
	/// <field name="TEXTURE_CUBE_MAP_POSITIVE_X" type="GLenum">TEXTURE_CUBE_MAP_POSITIVE_X</field>
	/// <field name="TEXTURE_CUBE_MAP_NEGATIVE_X" type="GLenum">TEXTURE_CUBE_MAP_NEGATIVE_X</field>
	/// <field name="TEXTURE_CUBE_MAP_POSITIVE_Y" type="GLenum">TEXTURE_CUBE_MAP_POSITIVE_Y</field>
	/// <field name="TEXTURE_CUBE_MAP_NEGATIVE_Y" type="GLenum">TEXTURE_CUBE_MAP_NEGATIVE_Y</field>
	/// <field name="TEXTURE_CUBE_MAP_POSITIVE_Z" type="GLenum">TEXTURE_CUBE_MAP_POSITIVE_Z</field>
	/// <field name="TEXTURE_CUBE_MAP_NEGATIVE_Z" type="GLenum">TEXTURE_CUBE_MAP_NEGATIVE_Z</field>
	/// <field name="MAX_CUBE_MAP_TEXTURE_SIZE" type="GLenum">MAX_CUBE_MAP_TEXTURE_SIZE</field>
	/// <field name="TEXTURE0" type="GLenum">TEXTURE0</field>
	/// <field name="TEXTURE1" type="GLenum">TEXTURE1</field>
	/// <field name="TEXTURE2" type="GLenum">TEXTURE2</field>
	/// <field name="TEXTURE3" type="GLenum">TEXTURE3</field>
	/// <field name="TEXTURE4" type="GLenum">TEXTURE4</field>
	/// <field name="TEXTURE5" type="GLenum">TEXTURE5</field>
	/// <field name="TEXTURE6" type="GLenum">TEXTURE6</field>
	/// <field name="TEXTURE7" type="GLenum">TEXTURE7</field>
	/// <field name="TEXTURE8" type="GLenum">TEXTURE8</field>
	/// <field name="TEXTURE9" type="GLenum">TEXTURE9</field>
	/// <field name="TEXTURE10" type="GLenum">TEXTURE10</field>
	/// <field name="TEXTURE11" type="GLenum">TEXTURE11</field>
	/// <field name="TEXTURE12" type="GLenum">TEXTURE12</field>
	/// <field name="TEXTURE13" type="GLenum">TEXTURE13</field>
	/// <field name="TEXTURE14" type="GLenum">TEXTURE14</field>
	/// <field name="TEXTURE15" type="GLenum">TEXTURE15</field>
	/// <field name="TEXTURE16" type="GLenum">TEXTURE16</field>
	/// <field name="TEXTURE17" type="GLenum">TEXTURE17</field>
	/// <field name="TEXTURE18" type="GLenum">TEXTURE18</field>
	/// <field name="TEXTURE19" type="GLenum">TEXTURE19</field>
	/// <field name="TEXTURE20" type="GLenum">TEXTURE20</field>
	/// <field name="TEXTURE21" type="GLenum">TEXTURE21</field>
	/// <field name="TEXTURE22" type="GLenum">TEXTURE22</field>
	/// <field name="TEXTURE23" type="GLenum">TEXTURE23</field>
	/// <field name="TEXTURE24" type="GLenum">TEXTURE24</field>
	/// <field name="TEXTURE25" type="GLenum">TEXTURE25</field>
	/// <field name="TEXTURE26" type="GLenum">TEXTURE26</field>
	/// <field name="TEXTURE27" type="GLenum">TEXTURE27</field>
	/// <field name="TEXTURE28" type="GLenum">TEXTURE28</field>
	/// <field name="TEXTURE29" type="GLenum">TEXTURE29</field>
	/// <field name="TEXTURE30" type="GLenum">TEXTURE30</field>
	/// <field name="TEXTURE31" type="GLenum">TEXTURE31</field>
	/// <field name="ACTIVE_TEXTURE" type="GLenum">ACTIVE_TEXTURE</field>
	/// <field name="REPEAT" type="GLenum">REPEAT</field>
	/// <field name="CLAMP_TO_EDGE" type="GLenum">CLAMP_TO_EDGE</field>
	/// <field name="MIRRORED_REPEAT" type="GLenum">MIRRORED_REPEAT</field>
	/// <field name="FLOAT_VEC2" type="GLenum">FLOAT_VEC2</field>
	/// <field name="FLOAT_VEC3" type="GLenum">FLOAT_VEC3</field>
	/// <field name="FLOAT_VEC4" type="GLenum">FLOAT_VEC4</field>
	/// <field name="INT_VEC2" type="GLenum">INT_VEC2</field>
	/// <field name="INT_VEC3" type="GLenum">INT_VEC3</field>
	/// <field name="INT_VEC4" type="GLenum">INT_VEC4</field>
	/// <field name="BOOL" type="GLenum">BOOL</field>
	/// <field name="BOOL_VEC2" type="GLenum">BOOL_VEC2</field>
	/// <field name="BOOL_VEC3" type="GLenum">BOOL_VEC3</field>
	/// <field name="BOOL_VEC4" type="GLenum">BOOL_VEC4</field>
	/// <field name="FLOAT_MAT2" type="GLenum">FLOAT_MAT2</field>
	/// <field name="FLOAT_MAT3" type="GLenum">FLOAT_MAT3</field>
	/// <field name="FLOAT_MAT4" type="GLenum">FLOAT_MAT4</field>
	/// <field name="SAMPLER_2D" type="GLenum">SAMPLER_2D</field>
	/// <field name="SAMPLER_CUBE" type="GLenum">SAMPLER_CUBE</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_ENABLED" type="GLenum">VERTEX_ATTRIB_ARRAY_ENABLED</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_SIZE" type="GLenum">VERTEX_ATTRIB_ARRAY_SIZE</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_STRIDE" type="GLenum">VERTEX_ATTRIB_ARRAY_STRIDE</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_TYPE" type="GLenum">VERTEX_ATTRIB_ARRAY_TYPE</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_NORMALIZED" type="GLenum">VERTEX_ATTRIB_ARRAY_NORMALIZED</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_POINTER" type="GLenum">VERTEX_ATTRIB_ARRAY_POINTER</field>
	/// <field name="VERTEX_ATTRIB_ARRAY_BUFFER_BINDING" type="GLenum">VERTEX_ATTRIB_ARRAY_BUFFER_BINDING</field>
	/// <field name="COMPILE_STATUS" type="GLenum">COMPILE_STATUS</field>
	/// <field name="INFO_LOG_LENGTH" type="GLenum">INFO_LOG_LENGTH</field>
	/// <field name="SHADER_SOURCE_LENGTH" type="GLenum">SHADER_SOURCE_LENGTH</field>
	/// <field name="LOW_FLOAT" type="GLenum">LOW_FLOAT</field>
	/// <field name="MEDIUM_FLOAT" type="GLenum">MEDIUM_FLOAT</field>
	/// <field name="HIGH_FLOAT" type="GLenum">HIGH_FLOAT</field>
	/// <field name="LOW_INT" type="GLenum">LOW_INT</field>
	/// <field name="MEDIUM_INT" type="GLenum">MEDIUM_INT</field>
	/// <field name="HIGH_INT" type="GLenum">HIGH_INT</field>
	/// <field name="FRAMEBUFFER" type="GLenum">FRAMEBUFFER</field>
	/// <field name="RENDERBUFFER" type="GLenum">RENDERBUFFER</field>
	/// <field name="RGBA4" type="GLenum">RGBA4</field>
	/// <field name="RGB5_A1" type="GLenum">RGB5_A1</field>
	/// <field name="RGB565" type="GLenum">RGB565</field>
	/// <field name="DEPTH_COMPONENT16" type="GLenum">DEPTH_COMPONENT16</field>
	/// <field name="STENCIL_INDEX" type="GLenum">STENCIL_INDEX</field>
	/// <field name="STENCIL_INDEX8" type="GLenum">STENCIL_INDEX8</field>
	/// <field name="DEPTH_STENCIL" type="GLenum">DEPTH_STENCIL</field>
	/// <field name="RENDERBUFFER_WIDTH" type="GLenum">RENDERBUFFER_WIDTH</field>
	/// <field name="RENDERBUFFER_HEIGHT" type="GLenum">RENDERBUFFER_HEIGHT</field>
	/// <field name="RENDERBUFFER_INTERNAL_FORMAT" type="GLenum">RENDERBUFFER_INTERNAL_FORMAT</field>
	/// <field name="RENDERBUFFER_RED_SIZE" type="GLenum">RENDERBUFFER_RED_SIZE</field>
	/// <field name="RENDERBUFFER_GREEN_SIZE" type="GLenum">RENDERBUFFER_GREEN_SIZE</field>
	/// <field name="RENDERBUFFER_BLUE_SIZE" type="GLenum">RENDERBUFFER_BLUE_SIZE</field>
	/// <field name="RENDERBUFFER_ALPHA_SIZE" type="GLenum">RENDERBUFFER_ALPHA_SIZE</field>
	/// <field name="RENDERBUFFER_DEPTH_SIZE" type="GLenum">RENDERBUFFER_DEPTH_SIZE</field>
	/// <field name="RENDERBUFFER_STENCIL_SIZE" type="GLenum">RENDERBUFFER_STENCIL_SIZE</field>
	/// <field name="FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE" type="GLenum">FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE</field>
	/// <field name="FRAMEBUFFER_ATTACHMENT_OBJECT_NAME" type="GLenum">FRAMEBUFFER_ATTACHMENT_OBJECT_NAME</field>
	/// <field name="FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL" type="GLenum">FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL</field>
	/// <field name="FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE" type="GLenum">FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE</field>
	/// <field name="COLOR_ATTACHMENT0" type="GLenum">COLOR_ATTACHMENT0</field>
	/// <field name="DEPTH_ATTACHMENT" type="GLenum">DEPTH_ATTACHMENT</field>
	/// <field name="STENCIL_ATTACHMENT" type="GLenum">STENCIL_ATTACHMENT</field>
	/// <field name="DEPTH_STENCIL_ATTACHMENT" type="GLenum">DEPTH_STENCIL_ATTACHMENT</field>
	/// <field name="NONE" type="GLenum">NONE</field>
	/// <field name="FRAMEBUFFER_COMPLETE" type="GLenum">FRAMEBUFFER_COMPLETE</field>
	/// <field name="FRAMEBUFFER_INCOMPLETE_ATTACHMENT" type="GLenum">FRAMEBUFFER_INCOMPLETE_ATTACHMENT</field>
	/// <field name="FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT" type="GLenum">FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT</field>
	/// <field name="FRAMEBUFFER_INCOMPLETE_DIMENSIONS" type="GLenum">FRAMEBUFFER_INCOMPLETE_DIMENSIONS</field>
	/// <field name="FRAMEBUFFER_UNSUPPORTED" type="GLenum">FRAMEBUFFER_UNSUPPORTED</field>
	/// <field name="FRAMEBUFFER_BINDING" type="GLenum">FRAMEBUFFER_BINDING</field>
	/// <field name="RENDERBUFFER_BINDING" type="GLenum">RENDERBUFFER_BINDING</field>
	/// <field name="MAX_RENDERBUFFER_SIZE" type="GLenum">MAX_RENDERBUFFER_SIZE</field>
	/// <field name="INVALID_FRAMEBUFFER_OPERATION" type="GLenum">INVALID_FRAMEBUFFER_OPERATION</field>
	/// <field name="UNPACK_FLIP_Y_WEBGL" type="GLenum">UNPACK_FLIP_Y_WEBGL</field>
	/// <field name="UNPACK_PREMULTIPLY_ALPHA_WEBGL" type="GLenum">UNPACK_PREMULTIPLY_ALPHA_WEBGL</field>
	/// <field name="CONTEXT_LOST_WEBGL" type="GLenum">CONTEXT_LOST_WEBGL</field>
	/// <field name="UNPACK_COLORSPACE_CONVERSION_WEBGL" type="GLenum">UNPACK_COLORSPACE_CONVERSION_WEBGL</field>
	/// <field name="BROWSER_DEFAULT_WEBGL" type="GLenum">BROWSER_DEFAULT_WEBGL</field>
	/// <field name="canvas" type="HTMLCanvasElement">canvas</field>
	if (typeof WebGLRenderingContext._init == "undefined") {
		/* ClearBufferMask */
		WebGLRenderingContext.prototype.DEPTH_BUFFER_BIT = 0x00000100;
		WebGLRenderingContext.prototype.STENCIL_BUFFER_BIT = 0x00000400;
		WebGLRenderingContext.prototype.COLOR_BUFFER_BIT = 0x00004000;
		/* BeginMode */
		WebGLRenderingContext.prototype.POINTS = 0x0000;
		WebGLRenderingContext.prototype.LINES = 0x0001;
		WebGLRenderingContext.prototype.LINE_LOOP = 0x0002;
		WebGLRenderingContext.prototype.LINE_STRIP = 0x0003;
		WebGLRenderingContext.prototype.TRIANGLES = 0x0004;
		WebGLRenderingContext.prototype.TRIANGLE_STRIP = 0x0005;
		WebGLRenderingContext.prototype.TRIANGLE_FAN = 0x0006;
		/* AlphaFunction (not supported in ES20) */
		/*      NEVER */
		/*      LESS */
		/*      EQUAL */
		/*      LEQUAL */
		/*      GREATER */
		/*      NOTEQUAL */
		/*      GEQUAL */
		/*      ALWAYS */
		/* BlendingFactorDest */
		WebGLRenderingContext.prototype.ZERO = 0;
		WebGLRenderingContext.prototype.ONE = 1;
		WebGLRenderingContext.prototype.SRC_COLOR = 0x0300;
		WebGLRenderingContext.prototype.ONE_MINUS_SRC_COLOR = 0x0301;
		WebGLRenderingContext.prototype.SRC_ALPHA = 0x0302;
		WebGLRenderingContext.prototype.ONE_MINUS_SRC_ALPHA = 0x0303;
		WebGLRenderingContext.prototype.DST_ALPHA = 0x0304;
		WebGLRenderingContext.prototype.ONE_MINUS_DST_ALPHA = 0x0305;
		/* BlendingFactorSrc */
		/*      ZERO */
		/*      ONE */
		WebGLRenderingContext.prototype.DST_COLOR = 0x0306;
		WebGLRenderingContext.prototype.ONE_MINUS_DST_COLOR = 0x0307;
		WebGLRenderingContext.prototype.SRC_ALPHA_SATURATE = 0x0308;
		/*      SRC_ALPHA */
		/*      ONE_MINUS_SRC_ALPHA */
		/*      DST_ALPHA */
		/*      ONE_MINUS_DST_ALPHA */
		/* BlendEquationSeparate */
		WebGLRenderingContext.prototype.FUNC_ADD = 0x8006;
		WebGLRenderingContext.prototype.BLEND_EQUATION = 0x8009;
		WebGLRenderingContext.prototype.BLEND_EQUATION_RGB = 0x8009;
		/* same as BLEND_EQUATION */
		WebGLRenderingContext.prototype.BLEND_EQUATION_ALPHA = 0x883D;
		/* BlendSubtract */
		WebGLRenderingContext.prototype.FUNC_SUBTRACT = 0x800A;
		WebGLRenderingContext.prototype.FUNC_REVERSE_SUBTRACT = 0x800B;
		/* Separate Blend Functions */
		WebGLRenderingContext.prototype.BLEND_DST_RGB = 0x80C8;
		WebGLRenderingContext.prototype.BLEND_SRC_RGB = 0x80C9;
		WebGLRenderingContext.prototype.BLEND_DST_ALPHA = 0x80CA;
		WebGLRenderingContext.prototype.BLEND_SRC_ALPHA = 0x80CB;
		WebGLRenderingContext.prototype.CONSTANT_COLOR = 0x8001;
		WebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_COLOR = 0x8002;
		WebGLRenderingContext.prototype.CONSTANT_ALPHA = 0x8003;
		WebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
		WebGLRenderingContext.prototype.BLEND_COLOR = 0x8005;
		/* Buffer Objects */
		WebGLRenderingContext.prototype.ARRAY_BUFFER = 0x8892;
		WebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER = 0x8893;
		WebGLRenderingContext.prototype.ARRAY_BUFFER_BINDING = 0x8894;
		WebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
		WebGLRenderingContext.prototype.STREAM_DRAW = 0x88E0;
		WebGLRenderingContext.prototype.STATIC_DRAW = 0x88E4;
		WebGLRenderingContext.prototype.DYNAMIC_DRAW = 0x88E8;
		WebGLRenderingContext.prototype.BUFFER_SIZE = 0x8764;
		WebGLRenderingContext.prototype.BUFFER_USAGE = 0x8765;
		WebGLRenderingContext.prototype.CURRENT_VERTEX_ATTRIB = 0x8626;
		/* CullFaceMode */
		WebGLRenderingContext.prototype.FRONT = 0x0404;
		WebGLRenderingContext.prototype.BACK = 0x0405;
		WebGLRenderingContext.prototype.FRONT_AND_BACK = 0x0408;
		/* DepthFunction */
		/*      NEVER */
		/*      LESS */
		/*      EQUAL */
		/*      LEQUAL */
		/*      GREATER */
		/*      NOTEQUAL */
		/*      GEQUAL */
		/*      ALWAYS */
		/* EnableCap */
		WebGLRenderingContext.prototype.TEXTURE_2D = 0x0DE1;
		WebGLRenderingContext.prototype.CULL_FACE = 0x0B44;
		WebGLRenderingContext.prototype.BLEND = 0x0BE2;
		WebGLRenderingContext.prototype.DITHER = 0x0BD0;
		WebGLRenderingContext.prototype.STENCIL_TEST = 0x0B90;
		WebGLRenderingContext.prototype.DEPTH_TEST = 0x0B71;
		WebGLRenderingContext.prototype.SCISSOR_TEST = 0x0C11;
		WebGLRenderingContext.prototype.POLYGON_OFFSET_FILL = 0x8037;
		WebGLRenderingContext.prototype.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
		WebGLRenderingContext.prototype.SAMPLE_COVERAGE = 0x80A0;
		/* ErrorCode */
		WebGLRenderingContext.prototype.NO_ERROR = 0;
		WebGLRenderingContext.prototype.INVALID_ENUM = 0x0500;
		WebGLRenderingContext.prototype.INVALID_VALUE = 0x0501;
		WebGLRenderingContext.prototype.INVALID_OPERATION = 0x0502;
		WebGLRenderingContext.prototype.OUT_OF_MEMORY = 0x0505;
		/* FrontFaceDirection */
		WebGLRenderingContext.prototype.CW = 0x0900;
		WebGLRenderingContext.prototype.CCW = 0x0901;
		/* GetPName */
		WebGLRenderingContext.prototype.LINE_WIDTH = 0x0B21;
		WebGLRenderingContext.prototype.ALIASED_POINT_SIZE_RANGE = 0x846D;
		WebGLRenderingContext.prototype.ALIASED_LINE_WIDTH_RANGE = 0x846E;
		WebGLRenderingContext.prototype.CULL_FACE_MODE = 0x0B45;
		WebGLRenderingContext.prototype.FRONT_FACE = 0x0B46;
		WebGLRenderingContext.prototype.DEPTH_RANGE = 0x0B70;
		WebGLRenderingContext.prototype.DEPTH_WRITEMASK = 0x0B72;
		WebGLRenderingContext.prototype.DEPTH_CLEAR_VALUE = 0x0B73;
		WebGLRenderingContext.prototype.DEPTH_FUNC = 0x0B74;
		WebGLRenderingContext.prototype.STENCIL_CLEAR_VALUE = 0x0B91;
		WebGLRenderingContext.prototype.STENCIL_FUNC = 0x0B92;
		WebGLRenderingContext.prototype.STENCIL_FAIL = 0x0B94;
		WebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
		WebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_PASS = 0x0B96;
		WebGLRenderingContext.prototype.STENCIL_REF = 0x0B97;
		WebGLRenderingContext.prototype.STENCIL_VALUE_MASK = 0x0B93;
		WebGLRenderingContext.prototype.STENCIL_WRITEMASK = 0x0B98;
		WebGLRenderingContext.prototype.STENCIL_BACK_FUNC = 0x8800;
		WebGLRenderingContext.prototype.STENCIL_BACK_FAIL = 0x8801;
		WebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
		WebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
		WebGLRenderingContext.prototype.STENCIL_BACK_REF = 0x8CA3;
		WebGLRenderingContext.prototype.STENCIL_BACK_VALUE_MASK = 0x8CA4;
		WebGLRenderingContext.prototype.STENCIL_BACK_WRITEMASK = 0x8CA5;
		WebGLRenderingContext.prototype.VIEWPORT = 0x0BA2;
		WebGLRenderingContext.prototype.SCISSOR_BOX = 0x0C10;
		/*      SCISSOR_TEST */
		WebGLRenderingContext.prototype.COLOR_CLEAR_VALUE = 0x0C22;
		WebGLRenderingContext.prototype.COLOR_WRITEMASK = 0x0C23;
		WebGLRenderingContext.prototype.UNPACK_ALIGNMENT = 0x0CF5;
		WebGLRenderingContext.prototype.PACK_ALIGNMENT = 0x0D05;
		WebGLRenderingContext.prototype.MAX_TEXTURE_SIZE = 0x0D33;
		WebGLRenderingContext.prototype.MAX_VIEWPORT_DIMS = 0x0D3A;
		WebGLRenderingContext.prototype.SUBPIXEL_BITS = 0x0D50;
		WebGLRenderingContext.prototype.RED_BITS = 0x0D52;
		WebGLRenderingContext.prototype.GREEN_BITS = 0x0D53;
		WebGLRenderingContext.prototype.BLUE_BITS = 0x0D54;
		WebGLRenderingContext.prototype.ALPHA_BITS = 0x0D55;
		WebGLRenderingContext.prototype.DEPTH_BITS = 0x0D56;
		WebGLRenderingContext.prototype.STENCIL_BITS = 0x0D57;
		WebGLRenderingContext.prototype.POLYGON_OFFSET_UNITS = 0x2A00;
		/*      POLYGON_OFFSET_FILL */
		WebGLRenderingContext.prototype.POLYGON_OFFSET_FACTOR = 0x8038;
		WebGLRenderingContext.prototype.TEXTURE_BINDING_2D = 0x8069;
		WebGLRenderingContext.prototype.SAMPLE_BUFFERS = 0x80A8;
		WebGLRenderingContext.prototype.SAMPLES = 0x80A9;
		WebGLRenderingContext.prototype.SAMPLE_COVERAGE_VALUE = 0x80AA;
		WebGLRenderingContext.prototype.SAMPLE_COVERAGE_INVERT = 0x80AB;
		/* GetTextureParameter */
		/*      TEXTURE_MAG_FILTER */
		/*      TEXTURE_MIN_FILTER */
		/*      TEXTURE_WRAP_S */
		/*      TEXTURE_WRAP_T */
		WebGLRenderingContext.prototype.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
		WebGLRenderingContext.prototype.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
		/* HintMode */
		WebGLRenderingContext.prototype.DONT_CARE = 0x1100;
		WebGLRenderingContext.prototype.FASTEST = 0x1101;
		WebGLRenderingContext.prototype.NICEST = 0x1102;
		/* HintTarget */
		WebGLRenderingContext.prototype.GENERATE_MIPMAP_HINT = 0x8192;
		/* DataType */
		WebGLRenderingContext.prototype.BYTE = 0x1400;
		WebGLRenderingContext.prototype.UNSIGNED_BYTE = 0x1401;
		WebGLRenderingContext.prototype.SHORT = 0x1402;
		WebGLRenderingContext.prototype.UNSIGNED_SHORT = 0x1403;
		WebGLRenderingContext.prototype.INT = 0x1404;
		WebGLRenderingContext.prototype.UNSIGNED_INT = 0x1405;
		WebGLRenderingContext.prototype.FLOAT = 0x1406;
		/* PixelFormat */
		WebGLRenderingContext.prototype.DEPTH_COMPONENT = 0x1902;
		WebGLRenderingContext.prototype.ALPHA = 0x1906;
		WebGLRenderingContext.prototype.RGB = 0x1907;
		WebGLRenderingContext.prototype.RGBA = 0x1908;
		WebGLRenderingContext.prototype.LUMINANCE = 0x1909;
		WebGLRenderingContext.prototype.LUMINANCE_ALPHA = 0x190A;
		/* PixelType */
		/*      UNSIGNED_BYTE */
		WebGLRenderingContext.prototype.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
		WebGLRenderingContext.prototype.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
		WebGLRenderingContext.prototype.UNSIGNED_SHORT_5_6_5 = 0x8363;
		/* Shaders */
		WebGLRenderingContext.prototype.FRAGMENT_SHADER = 0x8B30;
		WebGLRenderingContext.prototype.VERTEX_SHADER = 0x8B31;
		WebGLRenderingContext.prototype.MAX_VERTEX_ATTRIBS = 0x8869;
		WebGLRenderingContext.prototype.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
		WebGLRenderingContext.prototype.MAX_VARYING_VECTORS = 0x8DFC;
		WebGLRenderingContext.prototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
		WebGLRenderingContext.prototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
		WebGLRenderingContext.prototype.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
		WebGLRenderingContext.prototype.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
		WebGLRenderingContext.prototype.SHADER_TYPE = 0x8B4F;
		WebGLRenderingContext.prototype.DELETE_STATUS = 0x8B80;
		WebGLRenderingContext.prototype.LINK_STATUS = 0x8B82;
		WebGLRenderingContext.prototype.VALIDATE_STATUS = 0x8B83;
		WebGLRenderingContext.prototype.ATTACHED_SHADERS = 0x8B85;
		WebGLRenderingContext.prototype.ACTIVE_UNIFORMS = 0x8B86;
		WebGLRenderingContext.prototype.ACTIVE_UNIFORM_MAX_LENGTH = 0x8B87;
		WebGLRenderingContext.prototype.ACTIVE_ATTRIBUTES = 0x8B89;
		WebGLRenderingContext.prototype.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8B8A;
		WebGLRenderingContext.prototype.SHADING_LANGUAGE_VERSION = 0x8B8C;
		WebGLRenderingContext.prototype.CURRENT_PROGRAM = 0x8B8D;
		/* StencilFunction */
		WebGLRenderingContext.prototype.NEVER = 0x0200;
		WebGLRenderingContext.prototype.LESS = 0x0201;
		WebGLRenderingContext.prototype.EQUAL = 0x0202;
		WebGLRenderingContext.prototype.LEQUAL = 0x0203;
		WebGLRenderingContext.prototype.GREATER = 0x0204;
		WebGLRenderingContext.prototype.NOTEQUAL = 0x0205;
		WebGLRenderingContext.prototype.GEQUAL = 0x0206;
		WebGLRenderingContext.prototype.ALWAYS = 0x0207;
		/* StencilOp */
		/*      ZERO */
		WebGLRenderingContext.prototype.KEEP = 0x1E00;
		WebGLRenderingContext.prototype.REPLACE = 0x1E01;
		WebGLRenderingContext.prototype.INCR = 0x1E02;
		WebGLRenderingContext.prototype.DECR = 0x1E03;
		WebGLRenderingContext.prototype.INVERT = 0x150A;
		WebGLRenderingContext.prototype.INCR_WRAP = 0x8507;
		WebGLRenderingContext.prototype.DECR_WRAP = 0x8508;
		/* StringName */
		WebGLRenderingContext.prototype.VENDOR = 0x1F00;
		WebGLRenderingContext.prototype.RENDERER = 0x1F01;
		WebGLRenderingContext.prototype.VERSION = 0x1F02;
		/* TextureMagFilter */
		WebGLRenderingContext.prototype.NEAREST = 0x2600;
		WebGLRenderingContext.prototype.LINEAR = 0x2601;
		/* TextureMinFilter */
		/*      NEAREST */
		/*      LINEAR */
		WebGLRenderingContext.prototype.NEAREST_MIPMAP_NEAREST = 0x2700;
		WebGLRenderingContext.prototype.LINEAR_MIPMAP_NEAREST = 0x2701;
		WebGLRenderingContext.prototype.NEAREST_MIPMAP_LINEAR = 0x2702;
		WebGLRenderingContext.prototype.LINEAR_MIPMAP_LINEAR = 0x2703;
		/* TextureParameterName */
		WebGLRenderingContext.prototype.TEXTURE_MAG_FILTER = 0x2800;
		WebGLRenderingContext.prototype.TEXTURE_MIN_FILTER = 0x2801;
		WebGLRenderingContext.prototype.TEXTURE_WRAP_S = 0x2802;
		WebGLRenderingContext.prototype.TEXTURE_WRAP_T = 0x2803;
		/* TextureTarget */
		/*      TEXTURE_2D */
		WebGLRenderingContext.prototype.TEXTURE = 0x1702;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP = 0x8513;
		WebGLRenderingContext.prototype.TEXTURE_BINDING_CUBE_MAP = 0x8514;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
		WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
		WebGLRenderingContext.prototype.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
		/* TextureUnit */
		WebGLRenderingContext.prototype.TEXTURE0 = 0x84C0;
		WebGLRenderingContext.prototype.TEXTURE1 = 0x84C1;
		WebGLRenderingContext.prototype.TEXTURE2 = 0x84C2;
		WebGLRenderingContext.prototype.TEXTURE3 = 0x84C3;
		WebGLRenderingContext.prototype.TEXTURE4 = 0x84C4;
		WebGLRenderingContext.prototype.TEXTURE5 = 0x84C5;
		WebGLRenderingContext.prototype.TEXTURE6 = 0x84C6;
		WebGLRenderingContext.prototype.TEXTURE7 = 0x84C7;
		WebGLRenderingContext.prototype.TEXTURE8 = 0x84C8;
		WebGLRenderingContext.prototype.TEXTURE9 = 0x84C9;
		WebGLRenderingContext.prototype.TEXTURE10 = 0x84CA;
		WebGLRenderingContext.prototype.TEXTURE11 = 0x84CB;
		WebGLRenderingContext.prototype.TEXTURE12 = 0x84CC;
		WebGLRenderingContext.prototype.TEXTURE13 = 0x84CD;
		WebGLRenderingContext.prototype.TEXTURE14 = 0x84CE;
		WebGLRenderingContext.prototype.TEXTURE15 = 0x84CF;
		WebGLRenderingContext.prototype.TEXTURE16 = 0x84D0;
		WebGLRenderingContext.prototype.TEXTURE17 = 0x84D1;
		WebGLRenderingContext.prototype.TEXTURE18 = 0x84D2;
		WebGLRenderingContext.prototype.TEXTURE19 = 0x84D3;
		WebGLRenderingContext.prototype.TEXTURE20 = 0x84D4;
		WebGLRenderingContext.prototype.TEXTURE21 = 0x84D5;
		WebGLRenderingContext.prototype.TEXTURE22 = 0x84D6;
		WebGLRenderingContext.prototype.TEXTURE23 = 0x84D7;
		WebGLRenderingContext.prototype.TEXTURE24 = 0x84D8;
		WebGLRenderingContext.prototype.TEXTURE25 = 0x84D9;
		WebGLRenderingContext.prototype.TEXTURE26 = 0x84DA;
		WebGLRenderingContext.prototype.TEXTURE27 = 0x84DB;
		WebGLRenderingContext.prototype.TEXTURE28 = 0x84DC;
		WebGLRenderingContext.prototype.TEXTURE29 = 0x84DD;
		WebGLRenderingContext.prototype.TEXTURE30 = 0x84DE;
		WebGLRenderingContext.prototype.TEXTURE31 = 0x84DF;
		WebGLRenderingContext.prototype.ACTIVE_TEXTURE = 0x84E0;
		/* TextureWrapMode */
		WebGLRenderingContext.prototype.REPEAT = 0x2901;
		WebGLRenderingContext.prototype.CLAMP_TO_EDGE = 0x812F;
		WebGLRenderingContext.prototype.MIRRORED_REPEAT = 0x8370;
		/* Uniform Types */
		WebGLRenderingContext.prototype.FLOAT_VEC2 = 0x8B50;
		WebGLRenderingContext.prototype.FLOAT_VEC3 = 0x8B51;
		WebGLRenderingContext.prototype.FLOAT_VEC4 = 0x8B52;
		WebGLRenderingContext.prototype.INT_VEC2 = 0x8B53;
		WebGLRenderingContext.prototype.INT_VEC3 = 0x8B54;
		WebGLRenderingContext.prototype.INT_VEC4 = 0x8B55;
		WebGLRenderingContext.prototype.BOOL = 0x8B56;
		WebGLRenderingContext.prototype.BOOL_VEC2 = 0x8B57;
		WebGLRenderingContext.prototype.BOOL_VEC3 = 0x8B58;
		WebGLRenderingContext.prototype.BOOL_VEC4 = 0x8B59;
		WebGLRenderingContext.prototype.FLOAT_MAT2 = 0x8B5A;
		WebGLRenderingContext.prototype.FLOAT_MAT3 = 0x8B5B;
		WebGLRenderingContext.prototype.FLOAT_MAT4 = 0x8B5C;
		WebGLRenderingContext.prototype.SAMPLER_2D = 0x8B5E;
		WebGLRenderingContext.prototype.SAMPLER_CUBE = 0x8B60;
		/* Vertex Arrays */
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
		WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
		/* Shader Source */
		WebGLRenderingContext.prototype.COMPILE_STATUS = 0x8B81;
		WebGLRenderingContext.prototype.INFO_LOG_LENGTH = 0x8B84;
		WebGLRenderingContext.prototype.SHADER_SOURCE_LENGTH = 0x8B88;
		/* Shader Precision-Specified Types */
		WebGLRenderingContext.prototype.LOW_FLOAT = 0x8DF0;
		WebGLRenderingContext.prototype.MEDIUM_FLOAT = 0x8DF1;
		WebGLRenderingContext.prototype.HIGH_FLOAT = 0x8DF2;
		WebGLRenderingContext.prototype.LOW_INT = 0x8DF3;
		WebGLRenderingContext.prototype.MEDIUM_INT = 0x8DF4;
		WebGLRenderingContext.prototype.HIGH_INT = 0x8DF5;
		/* Framebuffer Object. */
		WebGLRenderingContext.prototype.FRAMEBUFFER = 0x8D40;
		WebGLRenderingContext.prototype.RENDERBUFFER = 0x8D41;
		WebGLRenderingContext.prototype.RGBA4 = 0x8056;
		WebGLRenderingContext.prototype.RGB5_A1 = 0x8057;
		WebGLRenderingContext.prototype.RGB565 = 0x8D62;
		WebGLRenderingContext.prototype.DEPTH_COMPONENT16 = 0x81A5;
		WebGLRenderingContext.prototype.STENCIL_INDEX = 0x1901;
		WebGLRenderingContext.prototype.STENCIL_INDEX8 = 0x8D48;
		WebGLRenderingContext.prototype.DEPTH_STENCIL = 0x84F9;
		WebGLRenderingContext.prototype.RENDERBUFFER_WIDTH = 0x8D42;
		WebGLRenderingContext.prototype.RENDERBUFFER_HEIGHT = 0x8D43;
		WebGLRenderingContext.prototype.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
		WebGLRenderingContext.prototype.RENDERBUFFER_RED_SIZE = 0x8D50;
		WebGLRenderingContext.prototype.RENDERBUFFER_GREEN_SIZE = 0x8D51;
		WebGLRenderingContext.prototype.RENDERBUFFER_BLUE_SIZE = 0x8D52;
		WebGLRenderingContext.prototype.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
		WebGLRenderingContext.prototype.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
		WebGLRenderingContext.prototype.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
		WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
		WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
		WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
		WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
		WebGLRenderingContext.prototype.COLOR_ATTACHMENT0 = 0x8CE0;
		WebGLRenderingContext.prototype.DEPTH_ATTACHMENT = 0x8D00;
		WebGLRenderingContext.prototype.STENCIL_ATTACHMENT = 0x8D20;
		WebGLRenderingContext.prototype.DEPTH_STENCIL_ATTACHMENT = 0x821A;
		WebGLRenderingContext.prototype.NONE = 0;
		WebGLRenderingContext.prototype.FRAMEBUFFER_COMPLETE = 0x8CD5;
		WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
		WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
		WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
		WebGLRenderingContext.prototype.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
		WebGLRenderingContext.prototype.FRAMEBUFFER_BINDING = 0x8CA6;
		WebGLRenderingContext.prototype.RENDERBUFFER_BINDING = 0x8CA7;
		WebGLRenderingContext.prototype.MAX_RENDERBUFFER_SIZE = 0x84E8;
		WebGLRenderingContext.prototype.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
		/* WebGL-specific enums */
		WebGLRenderingContext.prototype.UNPACK_FLIP_Y_WEBGL = 0x9240;
		WebGLRenderingContext.prototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
		WebGLRenderingContext.prototype.CONTEXT_LOST_WEBGL = 0x9242;
		WebGLRenderingContext.prototype.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
		WebGLRenderingContext.prototype.BROWSER_DEFAULT_WEBGL = 0x9244;
		WebGLRenderingContext.prototype.canvas;
		WebGLRenderingContext.prototype.getContextAttributes = function () {
			/// <summary>getContextAttributes</summary>
			/// <returns type="WebGLContextAttributes" />
		}
		WebGLRenderingContext.prototype.isContextLost = function () {
			/// <summary>isContextLost</summary>
			/// <returns type="boolean" />
		}
		WebGLRenderingContext.prototype.getSupportedExtensions = function () {
			/// <summary>getSupportedExtensions</summary>
			/// <returns type="DOMString[]" />
		}
		WebGLRenderingContext.prototype.getExtension = function (name) {
			/// <summary>getExtension</summary>
			/// <returns type="object" />
			/// <param name="DOMString" type="name">DOMString</param>
		}
		WebGLRenderingContext.prototype.activeTexture = function (texture) {
			/// <summary>activeTexture</summary>
			/// <param name="GLenum" type="texture">GLenum</param>
		}
		WebGLRenderingContext.prototype.attachShader = function (program, shader) {
			/// <summary>attachShader</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.bindAttribLocation = function (program, index, name) {
			/// <summary>bindAttribLocation</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="GLuint" type="index">GLuint</param>
			/// <param name="DOMString" type="name">DOMString</param>
		}
		WebGLRenderingContext.prototype.bindBuffer = function (target, buffer) {
			/// <summary>bindBuffer</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="WebGLBuffer" type="buffer">WebGLBuffer</param>
		}
		WebGLRenderingContext.prototype.bindFramebuffer = function (target, framebuffer) {
			/// <summary>bindFramebuffer</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="WebGLFramebuffer" type="framebuffer">WebGLFramebuffer</param>
		}
		WebGLRenderingContext.prototype.bindRenderbuffer = function (target, renderbuffer) {
			/// <summary>bindRenderbuffer</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="WebGLRenderbuffer" type="renderbuffer">WebGLRenderbuffer</param>
		}
		WebGLRenderingContext.prototype.bindTexture = function (target, texture) {
			/// <summary>bindTexture</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="WebGLTexture" type="texture">WebGLTexture</param>
		}
		WebGLRenderingContext.prototype.blendColor = function (red, green, blue, alpha) {
			/// <summary>blendColor</summary>
			/// <param name="GLclampf" type="red">GLclampf</param>
			/// <param name="GLclampf" type="green">GLclampf</param>
			/// <param name="GLclampf" type="blue">GLclampf</param>
			/// <param name="GLclampf" type="alpha">GLclampf</param>
		}
		WebGLRenderingContext.prototype.blendEquation = function (mode) {
			/// <summary>blendEquation</summary>
			/// <param name="GLenum" type="mode">GLenum</param>
		}
		WebGLRenderingContext.prototype.blendEquationSeparate = function (modeRGB, modeAlpha) {
			/// <summary>blendEquationSeparate</summary>
			/// <param name="GLenum" type="modeRGB">GLenum</param>
			/// <param name="GLenum" type="modeAlpha">GLenum</param>
		}
		WebGLRenderingContext.prototype.blendFunc = function (sfactor, dfactor) {
			/// <summary>blendFunc</summary>
			/// <param name="GLenum" type="sfactor">GLenum</param>
			/// <param name="GLenum" type="dfactor">GLenum</param>
		}
		WebGLRenderingContext.prototype.blendFuncSeparate = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
			/// <summary>blendFuncSeparate</summary>
			/// <param name="GLenum" type="srcRGB">GLenum</param>
			/// <param name="GLenum" type="dstRGB">GLenum</param>
			/// <param name="GLenum" type="srcAlpha">GLenum</param>
			/// <param name="GLenum" type="dstAlpha">GLenum</param>
		}
		WebGLRenderingContext.prototype.bufferData = function (target, size, usage) {
			/// <summary>bufferData</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLsizeiptr" type="size">GLsizeiptr</param>
			/// <param name="GLenum" type="usage">GLenum</param>
		}
		WebGLRenderingContext.prototype.bufferData = function (target, data, usage) {
			/// <summary>bufferData</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="ArrayBufferView" type="data">ArrayBufferView</param>
			/// <param name="GLenum" type="usage">GLenum</param>
		}
		WebGLRenderingContext.prototype.bufferData = function (target, data, usage) {
			/// <summary>bufferData</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="ArrayBuffer" type="data">ArrayBuffer</param>
			/// <param name="GLenum" type="usage">GLenum</param>
		}
		WebGLRenderingContext.prototype.bufferSubData = function (target, offset, data) {
			/// <summary>bufferSubData</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLintptr" type="offset">GLintptr</param>
			/// <param name="ArrayBufferView" type="data">ArrayBufferView</param>
		}
		WebGLRenderingContext.prototype.bufferSubData = function (target, offset, data) {
			/// <summary>bufferSubData</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLintptr" type="offset">GLintptr</param>
			/// <param name="ArrayBuffer" type="data">ArrayBuffer</param>
		}
		WebGLRenderingContext.prototype.checkFramebufferStatus = function (target) {
			/// <summary>checkFramebufferStatus</summary>
			/// <returns type="GLenum" />
			/// <param name="GLenum" type="target">GLenum</param>
		}
		WebGLRenderingContext.prototype.clear = function (mask) {
			/// <summary>clear</summary>
			/// <param name="GLbitfield" type="mask">GLbitfield</param>
		}
		WebGLRenderingContext.prototype.clearColor = function (red, green, blue, alpha) {
			/// <summary>clearColor</summary>
			/// <param name="GLclampf" type="red">GLclampf</param>
			/// <param name="GLclampf" type="green">GLclampf</param>
			/// <param name="GLclampf" type="blue">GLclampf</param>
			/// <param name="GLclampf" type="alpha">GLclampf</param>
		}
		WebGLRenderingContext.prototype.clearDepth = function (depth) {
			/// <summary>clearDepth</summary>
			/// <param name="GLclampf" type="depth">GLclampf</param>
		}
		WebGLRenderingContext.prototype.clearStencil = function (s) {
			/// <summary>clearStencil</summary>
			/// <param name="GLint" type="s">GLint</param>
		}
		WebGLRenderingContext.prototype.colorMask = function (red, green, blue, alpha) {
			/// <summary>colorMask</summary>
			/// <param name="GLboolean" type="red">GLboolean</param>
			/// <param name="GLboolean" type="green">GLboolean</param>
			/// <param name="GLboolean" type="blue">GLboolean</param>
			/// <param name="GLboolean" type="alpha">GLboolean</param>
		}
		WebGLRenderingContext.prototype.compileShader = function (shader) {
			/// <summary>compileShader</summary>
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.copyTexImage2D = function (target, level, internalformat, x, y, width, height, border) {
			/// <summary>copyTexImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
			/// <param name="GLint" type="border">GLint</param>
		}
		WebGLRenderingContext.prototype.copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height) {
			/// <summary>copyTexSubImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLint" type="xoffset">GLint</param>
			/// <param name="GLint" type="yoffset">GLint</param>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
		}
		WebGLRenderingContext.prototype.createBuffer = function () {
			/// <summary>createBuffer</summary>
			/// <returns type="WebGLBuffer" />
		}
		WebGLRenderingContext.prototype.createFramebuffer = function () {
			/// <summary>createFramebuffer</summary>
			/// <returns type="WebGLFramebuffer" />
		}
		WebGLRenderingContext.prototype.createProgram = function () {
			/// <summary>createProgram</summary>
			/// <returns type="WebGLProgram" />
		}
		WebGLRenderingContext.prototype.createRenderbuffer = function () {
			/// <summary>createRenderbuffer</summary>
			/// <returns type="WebGLRenderbuffer" />
		}
		WebGLRenderingContext.prototype.createShader = function (type) {
			/// <summary>createShader</summary>
			/// <returns type="WebGLShader" />
			/// <param name="GLenum" type="type">GLenum</param>
		}
		WebGLRenderingContext.prototype.createTexture = function () {
			/// <summary>createTexture</summary>
			/// <returns type="WebGLTexture" />
		}
		WebGLRenderingContext.prototype.cullFace = function (mode) {
			/// <summary>cullFace</summary>
			/// <param name="GLenum" type="mode">GLenum</param>
		}
		WebGLRenderingContext.prototype.deleteBuffer = function (buffer) {
			/// <summary>deleteBuffer</summary>
			/// <param name="WebGLBuffer" type="buffer">WebGLBuffer</param>
		}
		WebGLRenderingContext.prototype.deleteFramebuffer = function (framebuffer) {
			/// <summary>deleteFramebuffer</summary>
			/// <param name="WebGLFramebuffer" type="framebuffer">WebGLFramebuffer</param>
		}
		WebGLRenderingContext.prototype.deleteProgram = function (program) {
			/// <summary>deleteProgram</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.deleteRenderbuffer = function (renderbuffer) {
			/// <summary>deleteRenderbuffer</summary>
			/// <param name="WebGLRenderbuffer" type="renderbuffer">WebGLRenderbuffer</param>
		}
		WebGLRenderingContext.prototype.deleteShader = function (shader) {
			/// <summary>deleteShader</summary>
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.deleteTexture = function (texture) {
			/// <summary>deleteTexture</summary>
			/// <param name="WebGLTexture" type="texture">WebGLTexture</param>
		}
		WebGLRenderingContext.prototype.depthFunc = function (func) {
			/// <summary>depthFunc</summary>
			/// <param name="GLenum" type="func">GLenum</param>
		}
		WebGLRenderingContext.prototype.depthMask = function (flag) {
			/// <summary>depthMask</summary>
			/// <param name="GLboolean" type="flag">GLboolean</param>
		}
		WebGLRenderingContext.prototype.depthRange = function (zNear, zFar) {
			/// <summary>depthRange</summary>
			/// <param name="GLclampf" type="zNear">GLclampf</param>
			/// <param name="GLclampf" type="zFar">GLclampf</param>
		}
		WebGLRenderingContext.prototype.detachShader = function (program, shader) {
			/// <summary>detachShader</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.disable = function (cap) {
			/// <summary>disable</summary>
			/// <param name="GLenum" type="cap">GLenum</param>
		}
		WebGLRenderingContext.prototype.disableVertexAttribArray = function (index) {
			/// <summary>disableVertexAttribArray</summary>
			/// <param name="GLuint" type="index">GLuint</param>
		}
		WebGLRenderingContext.prototype.drawArrays = function (mode, first, count) {
			/// <summary>drawArrays</summary>
			/// <param name="GLenum" type="mode">GLenum</param>
			/// <param name="GLint" type="first">GLint</param>
			/// <param name="GLsizei" type="count">GLsizei</param>
		}
		WebGLRenderingContext.prototype.drawElements = function (mode, count, type, offset) {
			/// <summary>drawElements</summary>
			/// <param name="GLenum" type="mode">GLenum</param>
			/// <param name="GLsizei" type="count">GLsizei</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="GLintptr" type="offset">GLintptr</param>
		}
		WebGLRenderingContext.prototype.enable = function (cap) {
			/// <summary>enable</summary>
			/// <param name="GLenum" type="cap">GLenum</param>
		}
		WebGLRenderingContext.prototype.enableVertexAttribArray = function (index) {
			/// <summary>enableVertexAttribArray</summary>
			/// <param name="GLuint" type="index">GLuint</param>
		}
		WebGLRenderingContext.prototype.finish = function () {
			/// <summary>finish</summary>
		}
		WebGLRenderingContext.prototype.flush = function () {
			/// <summary>flush</summary>
		}
		WebGLRenderingContext.prototype.framebufferRenderbuffer = function (target, attachment, renderbuffertarget, renderbuffer) {
			/// <summary>framebufferRenderbuffer</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="attachment">GLenum</param>
			/// <param name="GLenum" type="renderbuffertarget">GLenum</param>
			/// <param name="WebGLRenderbuffer" type="renderbuffer">WebGLRenderbuffer</param>
		}
		WebGLRenderingContext.prototype.framebufferTexture2D = function (target, attachment, textarget, texture, level) {
			/// <summary>framebufferTexture2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="attachment">GLenum</param>
			/// <param name="GLenum" type="textarget">GLenum</param>
			/// <param name="WebGLTexture" type="texture">WebGLTexture</param>
			/// <param name="GLint" type="level">GLint</param>
		}
		WebGLRenderingContext.prototype.frontFace = function (mode) {
			/// <summary>frontFace</summary>
			/// <param name="GLenum" type="mode">GLenum</param>
		}
		WebGLRenderingContext.prototype.generateMipmap = function (target) {
			/// <summary>generateMipmap</summary>
			/// <param name="GLenum" type="target">GLenum</param>
		}
		WebGLRenderingContext.prototype.getActiveAttrib = function (program, index) {
			/// <summary>getActiveAttrib</summary>
			/// <returns type="WebGLActiveInfo" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="GLuint" type="index">GLuint</param>
		}
		WebGLRenderingContext.prototype.getActiveUniform = function (program, index) {
			/// <summary>getActiveUniform</summary>
			/// <returns type="WebGLActiveInfo" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="GLuint" type="index">GLuint</param>
		}
		WebGLRenderingContext.prototype.getAttachedShaders = function (program) {
			/// <summary>getAttachedShaders</summary>
			/// <returns type="WebGLShader[]" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.getAttribLocation = function (program, name) {
			/// <summary>getAttribLocation</summary>
			/// <returns type="GLint" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="DOMString" type="name">DOMString</param>
		}
		WebGLRenderingContext.prototype.getParameter = function (pname) {
			/// <summary>getParameter</summary>
			/// <returns type="any" />
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getBufferParameter = function (target, pname) {
			/// <summary>getBufferParameter</summary>
			/// <returns type="any" />
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getError = function () {
			/// <summary>getError</summary>
			/// <returns type="GLenum" />
		}
		WebGLRenderingContext.prototype.getFramebufferAttachmentParameter = function (target, attachment, pname) {
			/// <summary>getFramebufferAttachmentParameter</summary>
			/// <returns type="any" />
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="attachment">GLenum</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getProgramParameter = function (program, pname) {
			/// <summary>getProgramParameter</summary>
			/// <returns type="any" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getProgramInfoLog = function (program) {
			/// <summary>getProgramInfoLog</summary>
			/// <returns type="DOMString" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.getRenderbufferParameter = function (target, pname) {
			/// <summary>getRenderbufferParameter</summary>
			/// <returns type="any" />
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getShaderParameter = function (shader, pname) {
			/// <summary>getShaderParameter</summary>
			/// <returns type="any" />
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getShaderInfoLog = function (shader) {
			/// <summary>getShaderInfoLog</summary>
			/// <returns type="DOMString" />
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.getShaderSource = function (shader) {
			/// <summary>getShaderSource</summary>
			/// <returns type="DOMString" />
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.getTexParameter = function (target, pname) {
			/// <summary>getTexParameter</summary>
			/// <returns type="any" />
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getUniform = function (program, location) {
			/// <summary>getUniform</summary>
			/// <returns type="any" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
		}
		WebGLRenderingContext.prototype.getUniformLocation = function (program, name) {
			/// <summary>getUniformLocation</summary>
			/// <returns type="WebGLUniformLocation" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
			/// <param name="DOMString" type="name">DOMString</param>
		}
		WebGLRenderingContext.prototype.getVertexAttrib = function (index, pname) {
			/// <summary>getVertexAttrib</summary>
			/// <returns type="any" />
			/// <param name="GLuint" type="index">GLuint</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.getVertexAttribOffset = function (index, pname) {
			/// <summary>getVertexAttribOffset</summary>
			/// <returns type="GLsizeiptr" />
			/// <param name="GLuint" type="index">GLuint</param>
			/// <param name="GLenum" type="pname">GLenum</param>
		}
		WebGLRenderingContext.prototype.hint = function (target, mode) {
			/// <summary>hint</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="mode">GLenum</param>
		}
		WebGLRenderingContext.prototype.isBuffer = function (buffer) {
			/// <summary>isBuffer</summary>
			/// <returns type="GLboolean" />
			/// <param name="WebGLBuffer" type="buffer">WebGLBuffer</param>
		}
		WebGLRenderingContext.prototype.isEnabled = function (cap) {
			/// <summary>isEnabled</summary>
			/// <returns type="GLboolean" />
			/// <param name="GLenum" type="cap">GLenum</param>
		}
		WebGLRenderingContext.prototype.isFramebuffer = function (framebuffer) {
			/// <summary>isFramebuffer</summary>
			/// <returns type="GLboolean" />
			/// <param name="WebGLFramebuffer" type="framebuffer">WebGLFramebuffer</param>
		}
		WebGLRenderingContext.prototype.isProgram = function (program) {
			/// <summary>isProgram</summary>
			/// <returns type="GLboolean" />
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.isRenderbuffer = function (renderbuffer) {
			/// <summary>isRenderbuffer</summary>
			/// <returns type="GLboolean" />
			/// <param name="WebGLRenderbuffer" type="renderbuffer">WebGLRenderbuffer</param>
		}
		WebGLRenderingContext.prototype.isShader = function (shader) {
			/// <summary>isShader</summary>
			/// <returns type="GLboolean" />
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
		}
		WebGLRenderingContext.prototype.isTexture = function (texture) {
			/// <summary>isTexture</summary>
			/// <returns type="GLboolean" />
			/// <param name="WebGLTexture" type="texture">WebGLTexture</param>
		}
		WebGLRenderingContext.prototype.lineWidth = function (width) {
			/// <summary>lineWidth</summary>
			/// <param name="GLfloat" type="width">GLfloat</param>
		}
		WebGLRenderingContext.prototype.linkProgram = function (program) {
			/// <summary>linkProgram</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.pixelStorei = function (pname, param) {
			/// <summary>pixelStorei</summary>
			/// <param name="GLenum" type="pname">GLenum</param>
			/// <param name="GLint" type="param">GLint</param>
		}
		WebGLRenderingContext.prototype.polygonOffset = function (factor, units) {
			/// <summary>polygonOffset</summary>
			/// <param name="GLfloat" type="factor">GLfloat</param>
			/// <param name="GLfloat" type="units">GLfloat</param>
		}
		WebGLRenderingContext.prototype.readPixels = function (x, y, width, height, format, type, pixels) {
			/// <summary>readPixels</summary>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="ArrayBufferView" type="pixels">ArrayBufferView</param>
		}
		WebGLRenderingContext.prototype.renderbufferStorage = function (target, internalformat, width, height) {
			/// <summary>renderbufferStorage</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
		}
		WebGLRenderingContext.prototype.sampleCoverage = function (value, invert) {
			/// <summary>sampleCoverage</summary>
			/// <param name="GLclampf" type="value">GLclampf</param>
			/// <param name="GLboolean" type="invert">GLboolean</param>
		}
		WebGLRenderingContext.prototype.scissor = function (x, y, width, height) {
			/// <summary>scissor</summary>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
		}
		WebGLRenderingContext.prototype.shaderSource = function (shader, source) {
			/// <summary>shaderSource</summary>
			/// <param name="WebGLShader" type="shader">WebGLShader</param>
			/// <param name="DOMString" type="source">DOMString</param>
		}
		WebGLRenderingContext.prototype.stencilFunc = function (func, ref, mask) {
			/// <summary>stencilFunc</summary>
			/// <param name="GLenum" type="func">GLenum</param>
			/// <param name="GLint" type="ref">GLint</param>
			/// <param name="GLuint" type="mask">GLuint</param>
		}
		WebGLRenderingContext.prototype.stencilFuncSeparate = function (face, func, ref, mask) {
			/// <summary>stencilFuncSeparate</summary>
			/// <param name="GLenum" type="face">GLenum</param>
			/// <param name="GLenum" type="func">GLenum</param>
			/// <param name="GLint" type="ref">GLint</param>
			/// <param name="GLuint" type="mask">GLuint</param>
		}
		WebGLRenderingContext.prototype.stencilMask = function (mask) {
			/// <summary>stencilMask</summary>
			/// <param name="GLuint" type="mask">GLuint</param>
		}
		WebGLRenderingContext.prototype.stencilMaskSeparate = function (face, mask) {
			/// <summary>stencilMaskSeparate</summary>
			/// <param name="GLenum" type="face">GLenum</param>
			/// <param name="GLuint" type="mask">GLuint</param>
		}
		WebGLRenderingContext.prototype.stencilOp = function (fail, zfail, zpass) {
			/// <summary>stencilOp</summary>
			/// <param name="GLenum" type="fail">GLenum</param>
			/// <param name="GLenum" type="zfail">GLenum</param>
			/// <param name="GLenum" type="zpass">GLenum</param>
		}
		WebGLRenderingContext.prototype.stencilOpSeparate = function (face, fail, zfail, zpass) {
			/// <summary>stencilOpSeparate</summary>
			/// <param name="GLenum" type="face">GLenum</param>
			/// <param name="GLenum" type="fail">GLenum</param>
			/// <param name="GLenum" type="zfail">GLenum</param>
			/// <param name="GLenum" type="zpass">GLenum</param>
		}
		WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, width, height, border, format, type, pixels) {
			/// <summary>texImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
			/// <param name="GLint" type="border">GLint</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="ArrayBufferView" type="pixels">ArrayBufferView</param>
		}
		WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, format, type, pixels) {
			/// <summary>texImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="ImageData" type="pixels">ImageData</param>
		}
		WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, format, type, image) {
			/// <summary>texImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="HTMLImageElement" type="image">HTMLImageElement</param>
		}
		WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, format, type, canvas) {
			/// <summary>texImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="HTMLCanvasElement" type="canvas">HTMLCanvasElement</param>
		}
		WebGLRenderingContext.prototype.texImage2D = function (target, level, internalformat, format, type, video) {
			/// <summary>texImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLenum" type="internalformat">GLenum</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="HTMLVideoElement" type="video">HTMLVideoElement</param>
		}
		WebGLRenderingContext.prototype.texParameterf = function (target, pname, param) {
			/// <summary>texParameterf</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="pname">GLenum</param>
			/// <param name="GLfloat" type="param">GLfloat</param>
		}
		WebGLRenderingContext.prototype.texParameteri = function (target, pname, param) {
			/// <summary>texParameteri</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLenum" type="pname">GLenum</param>
			/// <param name="GLint" type="param">GLint</param>
		}
		WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
			/// <summary>texSubImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLint" type="xoffset">GLint</param>
			/// <param name="GLint" type="yoffset">GLint</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="ArrayBufferView" type="pixels">ArrayBufferView</param>
		}
		WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, format, type, pixels) {
			/// <summary>texSubImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLint" type="xoffset">GLint</param>
			/// <param name="GLint" type="yoffset">GLint</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="ImageData" type="pixels">ImageData</param>
		}
		WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, format, type, image) {
			/// <summary>texSubImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLint" type="xoffset">GLint</param>
			/// <param name="GLint" type="yoffset">GLint</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="HTMLImageElement" type="image">HTMLImageElement</param>
		}
		WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, format, type, canvas) {
			/// <summary>texSubImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLint" type="xoffset">GLint</param>
			/// <param name="GLint" type="yoffset">GLint</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="HTMLCanvasElement" type="canvas">HTMLCanvasElement</param>
		}
		WebGLRenderingContext.prototype.texSubImage2D = function (target, level, xoffset, yoffset, format, type, video) {
			/// <summary>texSubImage2D</summary>
			/// <param name="GLenum" type="target">GLenum</param>
			/// <param name="GLint" type="level">GLint</param>
			/// <param name="GLint" type="xoffset">GLint</param>
			/// <param name="GLint" type="yoffset">GLint</param>
			/// <param name="GLenum" type="format">GLenum</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="HTMLVideoElement" type="video">HTMLVideoElement</param>
		}
		WebGLRenderingContext.prototype.uniform1f = function (location, x) {
			/// <summary>uniform1f</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
		}
		WebGLRenderingContext.prototype.uniform1fv = function (location, v) {
			/// <summary>uniform1fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="FloatArray" type="v">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniform1fv = function (location, v) {
			/// <summary>uniform1fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<float>" type="v">sequence<float></param>
		}
		WebGLRenderingContext.prototype.uniform1i = function (location, x) {
			/// <summary>uniform1i</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLint" type="x">GLint</param>
		}
		WebGLRenderingContext.prototype.uniform1iv = function (location, v) {
			/// <summary>uniform1iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="Int32Array" type="v">Int32Array</param>
		}
		WebGLRenderingContext.prototype.uniform1iv = function (location, v) {
			/// <summary>uniform1iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<long>" type="v">sequence<long></param>
		}
		WebGLRenderingContext.prototype.uniform2f = function (location, x, y) {
			/// <summary>uniform2f</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
			/// <param name="GLfloat" type="y">GLfloat</param>
		}
		WebGLRenderingContext.prototype.uniform2fv = function (location, v) {
			/// <summary>uniform2fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="FloatArray" type="v">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniform2fv = function (location, v) {
			/// <summary>uniform2fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<float>" type="v">sequence<float></param>
		}
		WebGLRenderingContext.prototype.uniform2i = function (location, x, y) {
			/// <summary>uniform2i</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
		}
		WebGLRenderingContext.prototype.uniform2iv = function (location, v) {
			/// <summary>uniform2iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="Int32Array" type="v">Int32Array</param>
		}
		WebGLRenderingContext.prototype.uniform2iv = function (location, v) {
			/// <summary>uniform2iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<long>" type="v">sequence<long></param>
		}
		WebGLRenderingContext.prototype.uniform3f = function (location, x, y, z) {
			/// <summary>uniform3f</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
			/// <param name="GLfloat" type="y">GLfloat</param>
			/// <param name="GLfloat" type="z">GLfloat</param>
		}
		WebGLRenderingContext.prototype.uniform3fv = function (location, v) {
			/// <summary>uniform3fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="FloatArray" type="v">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniform3fv = function (location, v) {
			/// <summary>uniform3fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<float>" type="v">sequence<float></param>
		}
		WebGLRenderingContext.prototype.uniform3i = function (location, x, y, z) {
			/// <summary>uniform3i</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLint" type="z">GLint</param>
		}
		WebGLRenderingContext.prototype.uniform3iv = function (location, v) {
			/// <summary>uniform3iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="Int32Array" type="v">Int32Array</param>
		}
		WebGLRenderingContext.prototype.uniform3iv = function (location, v) {
			/// <summary>uniform3iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<long>" type="v">sequence<long></param>
		}
		WebGLRenderingContext.prototype.uniform4f = function (location, x, y, z, w) {
			/// <summary>uniform4f</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
			/// <param name="GLfloat" type="y">GLfloat</param>
			/// <param name="GLfloat" type="z">GLfloat</param>
			/// <param name="GLfloat" type="w">GLfloat</param>
		}
		WebGLRenderingContext.prototype.uniform4fv = function (location, v) {
			/// <summary>uniform4fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="FloatArray" type="v">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniform4fv = function (location, v) {
			/// <summary>uniform4fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<float>" type="v">sequence<float></param>
		}
		WebGLRenderingContext.prototype.uniform4i = function (location, x, y, z, w) {
			/// <summary>uniform4i</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLint" type="z">GLint</param>
			/// <param name="GLint" type="w">GLint</param>
		}
		WebGLRenderingContext.prototype.uniform4iv = function (location, v) {
			/// <summary>uniform4iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="Int32Array" type="v">Int32Array</param>
		}
		WebGLRenderingContext.prototype.uniform4iv = function (location, v) {
			/// <summary>uniform4iv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="sequence<long>" type="v">sequence<long></param>
		}
		WebGLRenderingContext.prototype.uniformMatrix2fv = function (location, transpose, value) {
			/// <summary>uniformMatrix2fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLboolean" type="transpose">GLboolean</param>
			/// <param name="FloatArray" type="value">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniformMatrix2fv = function (location, transpose, value) {
			/// <summary>uniformMatrix2fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLboolean" type="transpose">GLboolean</param>
			/// <param name="sequence<float>" type="value">sequence<float></param>
		}
		WebGLRenderingContext.prototype.uniformMatrix3fv = function (location, transpose, value) {
			/// <summary>uniformMatrix3fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLboolean" type="transpose">GLboolean</param>
			/// <param name="FloatArray" type="value">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniformMatrix3fv = function (location, transpose, value) {
			/// <summary>uniformMatrix3fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLboolean" type="transpose">GLboolean</param>
			/// <param name="sequence<float>" type="value">sequence<float></param>
		}
		WebGLRenderingContext.prototype.uniformMatrix4fv = function (location, transpose, value) {
			/// <summary>uniformMatrix4fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLboolean" type="transpose">GLboolean</param>
			/// <param name="FloatArray" type="value">FloatArray</param>
		}
		WebGLRenderingContext.prototype.uniformMatrix4fv = function (location, transpose, value) {
			/// <summary>uniformMatrix4fv</summary>
			/// <param name="WebGLUniformLocation" type="location">WebGLUniformLocation</param>
			/// <param name="GLboolean" type="transpose">GLboolean</param>
			/// <param name="sequence<float>" type="value">sequence<float></param>
		}
		WebGLRenderingContext.prototype.useProgram = function (program) {
			/// <summary>useProgram</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.validateProgram = function (program) {
			/// <summary>validateProgram</summary>
			/// <param name="WebGLProgram" type="program">WebGLProgram</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib1f = function (indx, x) {
			/// <summary>vertexAttrib1f</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib1fv = function (indx, values) {
			/// <summary>vertexAttrib1fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="FloatArray" type="values">FloatArray</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib1fv = function (indx, values) {
			/// <summary>vertexAttrib1fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="sequence<float>" type="values">sequence<float></param>
		}
		WebGLRenderingContext.prototype.vertexAttrib2f = function (indx, x, y) {
			/// <summary>vertexAttrib2f</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
			/// <param name="GLfloat" type="y">GLfloat</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib2fv = function (indx, values) {
			/// <summary>vertexAttrib2fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="FloatArray" type="values">FloatArray</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib2fv = function (indx, values) {
			/// <summary>vertexAttrib2fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="sequence<float>" type="values">sequence<float></param>
		}
		WebGLRenderingContext.prototype.vertexAttrib3f = function (indx, x, y, z) {
			/// <summary>vertexAttrib3f</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
			/// <param name="GLfloat" type="y">GLfloat</param>
			/// <param name="GLfloat" type="z">GLfloat</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib3fv = function (indx, values) {
			/// <summary>vertexAttrib3fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="FloatArray" type="values">FloatArray</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib3fv = function (indx, values) {
			/// <summary>vertexAttrib3fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="sequence<float>" type="values">sequence<float></param>
		}
		WebGLRenderingContext.prototype.vertexAttrib4f = function (indx, x, y, z, w) {
			/// <summary>vertexAttrib4f</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="GLfloat" type="x">GLfloat</param>
			/// <param name="GLfloat" type="y">GLfloat</param>
			/// <param name="GLfloat" type="z">GLfloat</param>
			/// <param name="GLfloat" type="w">GLfloat</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib4fv = function (indx, values) {
			/// <summary>vertexAttrib4fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="FloatArray" type="values">FloatArray</param>
		}
		WebGLRenderingContext.prototype.vertexAttrib4fv = function (indx, values) {
			/// <summary>vertexAttrib4fv</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="sequence<float>" type="values">sequence<float></param>
		}
		WebGLRenderingContext.prototype.vertexAttribPointer = function (indx, size, type, normalized, stride, offset) {
			/// <summary>vertexAttribPointer</summary>
			/// <param name="GLuint" type="indx">GLuint</param>
			/// <param name="GLint" type="size">GLint</param>
			/// <param name="GLenum" type="type">GLenum</param>
			/// <param name="GLboolean" type="normalized">GLboolean</param>
			/// <param name="GLsizei" type="stride">GLsizei</param>
			/// <param name="GLintptr" type="offset">GLintptr</param>
		}
		WebGLRenderingContext.prototype.viewport = function (x, y, width, height) {
			/// <summary>viewport</summary>
			/// <param name="GLint" type="x">GLint</param>
			/// <param name="GLint" type="y">GLint</param>
			/// <param name="GLsizei" type="width">GLsizei</param>
			/// <param name="GLsizei" type="height">GLsizei</param>
		}
	}
	WebGLRenderingContext._init = true;
}

