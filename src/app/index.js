import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "../styled-compoments/App.css";
import Home from '../pages/home';
import MenuNav from '../components/shared/MenuNav';
import {GlobalContianer} from '../styled-compoments/GlobalStyles';

import Contact from '../pages/contact';

import Panel0Introductions from '../pages/panels/panel-0-intro/Panel0Introductions';
import Panel0Anniversary from '../pages/panels/panel-0-anniversary';

import Panel1Prelude from '../pages/panels/panel-1-prelude/Panel1Prelude';
import Panel1PreludePanelFLags from '../pages/panels/panel-1-prelude/Panel1PreludePanelFlags';
import Panel1PreludePanelLit from '../pages/panels/panel-1-prelude/Panel1PreludePanelLitalia';
import Panel1PreludePanelStab from '../pages/panels/panel-1-prelude/Panel1PreludePanelStab';
import Panel1PreludePanelWar from '../pages/panels/panel-1-prelude/Panel1PreludePanelWar';

import Panel2Internment from '../pages/panels/panel-2-internment/Panel2Internment';
import Panel2InternmentPanel1 from '../pages/panels/panel-2-internment/Panel2InternmentPanel1';
import Panel2InternmentPanel2 from '../pages/panels/panel-2-internment/Panel2InternmentPanel2';
import Panel2InternmentPanel3 from '../pages/panels/panel-2-internment/Panel2InternmentPanel3';
import Panel2InternmentPanel4 from '../pages/panels/panel-2-internment/Panel2InternmentPanel4';
import Panel2InternmentPanel5 from '../pages/panels/panel-2-internment/Panel2InternmentPanel5';

import Panel3Restrictions from '../pages/panels/panel-3-restrictions/Panel3Restrictions';
import Panel3RestrictionsPanel1 from '../pages/panels/panel-3-restrictions/Panel3RestrictionsPanel1';
import Panel3RestrictionsPanel2 from '../pages/panels/panel-3-restrictions/Panel3RestrictionsPanel2';
import Panel3RestrictionsPanel3 from '../pages/panels/panel-3-restrictions/Panel3RestrictionsPanel3';

import Panel4Evacuation from '../pages/panels/panel-4-evacuation/Panel4Evacuation';
import Panel4EvacuationPanel1 from '../pages/panels/panel-4-evacuation/Panel4EvacuationPanel1';
import Panel4EvacuationPanel2 from '../pages/panels/panel-4-evacuation/Panel4EvacuationPanel2';
import Panel4EvacuationPanel3 from '../pages/panels/panel-4-evacuation/Panel4EvacuationPanel3';
import Panel4EvacuationPanel4 from '../pages/panels/panel-4-evacuation/Panel4EvacuationPanel4';

import Panel5Exclusion from '../pages/panels/panel-5-exclusion/Panel5Exclusion';
import Panel5ExclusionPanel1 from '../pages/panels/panel-5-exclusion/Panel5ExclusionPanel1';
import Panel5ExclusionPanel2 from '../pages/panels/panel-5-exclusion/Panel5ExclusionPanel2';

import Panel6Aftermath from '../pages/panels/panel-6-aftermath/Panel6Aftermath';
import Panel6AftermathPanel1 from '../pages/panels/panel-6-aftermath/Panel6AftermathPanel1';
import Panel6AftermathPanel2 from '../pages/panels/panel-6-aftermath/Panel6AftermathPanel2';
import Panel6AftermathPanel3 from '../pages/panels/panel-6-aftermath/Panel6AftermathPanel3';
import Panel6AftermathPanel4 from '../pages/panels/panel-6-aftermath/Panel6AftermathPanel4';

import Panel7Supplements from '../pages/panels/panel-7-supplements/Panel7Supplements';
import Panel7SupplementsPanel1 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel1';
import Panel7SupplementsPanel2 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel2';
import Panel7SupplementsPanel3 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel3';
import Panel7SupplementsPanel4 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel4';
import Panel7SupplementsPanel5 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel5';
import Panel7SupplementsPanel6 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel6';
import Panel7SupplementsPanel7 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel7';
import Panel7SupplementsPanel8 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel8';
import Panel7SupplementsPanel9 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel9';
import Panel7SupplementsPanel10 from '../pages/panels/panel-7-supplements/Panel7SupplementsPanel10';


import Footer from "../components/shared/Footer";
import Slide from 'react-reveal/Slide'; 

const App = () => (
  <>
  <GlobalContianer>
  <MenuNav />
  <Switch onUpdate={() => window.scrollTo(0, 0)}>
    <Slide bottom>

    
<Route exact path="/" component={Home} />
<Route exact path="/contact" component={Contact} />

<Route exact path="/anniversary" component={Panel0Anniversary} />
<Route exact path="/intro" component={Panel0Introductions} />

<Route exact path="/prelude" component={Panel1Prelude} />
<Route exact path="/prelude/flags" component={Panel1PreludePanelFLags} />
<Route exact path="/prelude/litalia" component={Panel1PreludePanelLit} />
<Route exact path="/prelude/stab" component={Panel1PreludePanelStab} />
<Route exact path="/prelude/war" component={Panel1PreludePanelWar} />

<Route exact path="/internment" component={Panel2Internment} />
<Route exact path="/internment/fence" component={Panel2InternmentPanel1} />
<Route exact path="/internment/trento" component={Panel2InternmentPanel2} />
<Route exact path="/internment/ears" component={Panel2InternmentPanel3} />
<Route exact path="/internment/ezio" component={Panel2InternmentPanel4} />
<Route exact path="/internment/deluca" component={Panel2InternmentPanel5} />

<Route exact path="/restrictions" component={Panel3Restrictions} />
<Route exact path="/restrictions/notice" component={Panel3RestrictionsPanel1} />
<Route exact path="/restrictions/cartoons" component={Panel3RestrictionsPanel2} />
<Route exact path="/restrictions/language" component={Panel3RestrictionsPanel3} />

<Route exact path="/evacuation" component={Panel4Evacuation} />
<Route exact path='/evacuations/pittsburg' component={Panel4EvacuationPanel1} />
<Route exact path='/evacuations/abono' component={Panel4EvacuationPanel2} />
<Route exact path='/evacuations/fishing' component={Panel4EvacuationPanel3} />
<Route exact path='/evacuations/evacuation' component={Panel4EvacuationPanel4} />

<Route exact path="/exclusion" component={Panel5Exclusion} />
<Route exact path='/exclusion/tenney' component={Panel5ExclusionPanel1} />
<Route exact path='/exclusion/guttadauro' component={Panel5ExclusionPanel2} />

<Route exact path="/aftermath" component={Panel6Aftermath} />
<Route exact path='/aftermath/lifted' component={Panel6AftermathPanel1} />
<Route exact path='/aftermath/friends' component={Panel6AftermathPanel2} />
<Route exact path='/aftermath/acknowledgments' component={Panel6AftermathPanel3} />
<Route exact path='/aftermath/proclamations' component={Panel6AftermathPanel4} />

<Route exact path="/supplements" component={Panel7SupplementsPanel1} />
{/* <Route exact path='/supplements/1' component={Panel7SupplementsPanel1} />   */}
<Route exact path='/supplements/2' component={Panel7SupplementsPanel2} />  
<Route exact path='/supplements/3' component={Panel7SupplementsPanel3} />  
<Route exact path='/supplements/4' component={Panel7SupplementsPanel4} />  
<Route exact path='/supplements/5' component={Panel7SupplementsPanel5} />  
<Route exact path='/supplements/6' component={Panel7SupplementsPanel6} />  
<Route exact path='/supplements/7' component={Panel7SupplementsPanel7} />  
<Route exact path='/supplements/8' component={Panel7SupplementsPanel8} />  
<Route exact path='/supplements/exhibit' component={Panel7SupplementsPanel9} />  
<Route exact path='/supplements/bibliography' component={Panel7SupplementsPanel10} />  
{/* <Route component={Home} /> */}
  </Slide>
  </Switch>
  </GlobalContianer>
  <Footer />
  </>
)

export default App;
