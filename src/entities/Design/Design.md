# Design concept
`DesignConcept` class is a wrapper on the `Concept` class.

`DesignConcept` is needed in order to 

When user create a `DesignConcept` its associated `Concept` is 

# Design
Design is a Data Structure storing Concepts as a Tree.

Details:
* It has an Initial Design Concept (`Design`'s `initialConcept` property)
* `DesignConcept` may contain a `parentId` property (it may be an orphan)
* `DesignConcept` may contain `claimIds` property linking `Claim` instances as relevant for the `Design Concept`
* `DesignConcepts`' `links` are validated by: the same `claimIds` shared by both `DesignConcepts`.

```javascript
class Design {
    initialConceptId = 'root'
    designConcepts = [
        new DesignConcept('dc1'), 
        new DesignConcept('root'), 
        new DesignConcept('dc2')
    ]
    
    getDesignConceptsByIds(idsArr = []){
        return this.designConcepts.filter()
    }
    
    get rootConcept(){
        return this.getDesignConceptsByIds(this.initialConceptId)[0]
    }
    
    get rootTree(){
        function getNextTreeLevel(id){
            const concepts = this.getDesignConceptsByIds(id)
            concepts.forEach(concept => {
                
            })
            
            return 
        }
        
        return getNextTreeLevel(this.rootConcept)
    }
    
    designConcepts = {
        'root': ['1', '2'],
        '1': [],
        '2': ['3', '20'],
        '3': [],
        '4': ['5'],
        '20': []
    }
    
}

class DesignConcept {
    id = 'dcRootId'
    childrenIds = ['dc1', 'dc2']
    relatedClaimIds = ['c1', 'c2']
    
    get children(){}
    get relatedClaims(){}
}
```