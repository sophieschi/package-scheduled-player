uniform sampler2D Texture;
uniform float effect;
varying vec2 TexCoord;
uniform vec4 Color;
 
void main() {
    vec2 uv = TexCoord.st;
 
    vec2 tex_offset = vec2(1) / vec2(textureSize(Texture, 0));
    vec3 result = vec3(0.);
    float sigma = 16.;
    float sigmaSqrd = 2.*pow(sigma, 2.);
    for(int i = -32; i<33; i++) {
        float weight = exp(-pow(float(i), 2.)/sigmaSqrd);
        result += texture(Texture, uv + vec2(tex_offset.x * float(i), 0.)).rgb * weight;
    }
 
    gl_FragColor = vec4(result, 1.);
}
