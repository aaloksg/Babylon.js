module BABYLON {
    /**
     * Gizmo that enables rotating a mesh along 3 axis
     */
    export class RotationGizmo extends Gizmo {
        private _xDrag:PlaneRotationGizmo;
        private _yDrag:PlaneRotationGizmo;
        private _zDrag:PlaneRotationGizmo;

        public set attachedMesh(mesh:Nullable<AbstractMesh>){
            if(this._xDrag){
                this._xDrag.attachedMesh = mesh;
                this._yDrag.attachedMesh = mesh;
                this._zDrag.attachedMesh = mesh;
            }
        }
        /**
         * Creates a RotationGizmo
         * @param gizmoLayer The utility layer the gizmo will be added to
         */
        constructor(gizmoLayer:UtilityLayerRenderer=UtilityLayerRenderer.DefaultUtilityLayer){
            super(gizmoLayer);
            this._xDrag = new PlaneRotationGizmo(new Vector3(1,0,0), BABYLON.Color3.Green().scale(0.5), gizmoLayer);
            this._yDrag = new PlaneRotationGizmo(new Vector3(0,1,0), BABYLON.Color3.Red().scale(0.5), gizmoLayer);
            this._zDrag = new PlaneRotationGizmo(new Vector3(0,0,1), BABYLON.Color3.Blue().scale(0.5), gizmoLayer);
            this.attachedMesh = null;
        }

        public set updateGizmoRotationToMatchAttachedMesh(value:boolean){
            if(this._xDrag){
                this._xDrag.updateGizmoRotationToMatchAttachedMesh = value;
                this._yDrag.updateGizmoRotationToMatchAttachedMesh = value;
                this._zDrag.updateGizmoRotationToMatchAttachedMesh = value;
            }
        }
        public get updateGizmoRotationToMatchAttachedMesh(){
            return this._xDrag.updateGizmoRotationToMatchAttachedMesh;
        }

        /**
         * Disposes of the gizmo
         */
        public dispose(){
            this._xDrag.dispose();
            this._yDrag.dispose();
            this._zDrag.dispose();
        }
    }
}