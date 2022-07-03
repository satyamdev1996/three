uniform sampler2D globeTexture;
varying vec2 vertexUV;

void main(){
    gl_FragColor=vec4(vec3(1,0,0)+ texture2D(globeTexture, vertexUV).xyz, 1.0);
}