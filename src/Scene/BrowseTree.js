/**
* Generated On: 2015-10-5
* Class: BrowseTree
* Description: BrowseTree parcourt un arbre de Node. Lors du parcours un ou plusieur NodeProcess peut etre appliqué sur certains Node.
*/

define('Scene/BrowseTree',['Globe/EllipsoidTileMesh','THREE'], function(EllipsoidTileMesh,THREE){

    function BrowseTree(){
        //Constructor

        this.process    = null;        
        this.root       = undefined;
    }
    
    
    BrowseTree.prototype.backFaceCulling = function(node,camera)
    {
        var normal  = camera.direction;
        for(var n = 0; n < node.normals().length; n ++ ) 
        {
            
            var dot = normal.dot(node.normals()[n]);
            if( dot > 0 )
            {
                node.visible    = true;
                dot             = normal.dot(node.normal());
                node.dot        = dot < 0 ? 0 : dot;
                break;
            }
        };
        
        return node.visible;
              
    };
    
    BrowseTree.prototype.frustumCulling = function(node,camera)
    {        
        var frustum = camera.frustum;
        
        return frustum.intersectsObject(node);   
    };
    
    BrowseTree.prototype.SSE = function(node,camera)
    {                                
        return camera.SSE(node) > 1.0;            
    };    
    
    BrowseTree.prototype.processNode = function(node,camera)
    {
        if(node instanceof EllipsoidTileMesh)
        {
            
            node.visible = false;
            
            if(this.frustumCulling(node,camera))
            
                if(this.backFaceCulling(node,camera));
            
                    if(this.SSE(node,camera) && node.noChild() && node.level < 4)
                    {
                       
                        node.level++;                        
                        //this.root.subdivide(node);
                        //node.material.color = new THREE.Color(1.0,0.0,0.0);
                    }
                                                
            return node.visible;
        }        
        
        return true;
    };

    /**
     * 
     * @param {type} tree
     * @param {type} camera
     * @returns {undefined}
     */
    BrowseTree.prototype.browse = function(tree, camera){
             
        this.root = tree;
        //if(this.processNode(tree,camera))       
        for(var i = 0;i<tree.children.length;i++)
            this._browse(tree.children[i],camera);

    };
    
    BrowseTree.prototype._browse = function(node, camera){
             
        if(this.processNode(node,camera))       
            for(var i = 0;i<node.children.length;i++)
                this._browse(node.children[i],camera);

    };

    return BrowseTree;
});