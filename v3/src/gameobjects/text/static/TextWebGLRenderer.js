var TextWebGLRenderer = function (renderer, src, interpolationPercentage, camera)
{
    if (this.renderMask !== this.renderFlags)
    {
        return;
    }
    
    renderer.spriteBatch.addSpriteTexture(src, camera, src.canvasTexture, src.prevWidth, src.prevHeight);
};

module.exports = TextWebGLRenderer;