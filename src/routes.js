import React, { Suspense, Lazy} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';





const Routes = () => (
<Router>
 <Suspense fallback = {<div></div>}>
     <Switch>
         <Route path = "listagem" component={} />
     </Switch>

 </Suspense>
</Router>




)