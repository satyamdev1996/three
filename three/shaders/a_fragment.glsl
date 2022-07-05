uniform sampler2D globeTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal;


void main(){
    float intensity = pow(0.5-dot(vertexNormal, vec3(0.0, 0.0, 1.0)),2.0);//1.05 -dot(vertexNormal, vec3(0.0,0.0,1.0));
    // vec3 atmosphere = vec3(1.0, 0.302, 0.4784) * pow(intensity,1.5);



    gl_FragColor=vec4(1.0, 0.7569, 0.302, 1.0)* intensity;
}