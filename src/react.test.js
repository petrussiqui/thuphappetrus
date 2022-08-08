function Test(){
var course = [{
    name: 'HTML,CSS,JS'
  }, {
    name: 'Responsive Web'
  }, {
    name: 'ReactJS'
  }];
  var li = [];
  
  for (var i = 0; i < course.length; i++) {
    li[i] = /*#__PURE__*/React.createElement("li", null, "course[i].name");
  }
  
  var list = /*#__PURE__*/React.createElement("ul", null, li);
  return list;
}
export default Test;


import * as React from "react"; 
import { useRoutes } from "react-router-dom"; 
 
function App() { 
  let element = useRoutes([ 
    { 
      path: "/dashboard", 
      element: <Dashboard />, 
      children: [ 
        { 
          path: "messages", 
          element: <DashboardMessages />, 
        }, 
        { path: "tasks", element: <DashboardTasks /> }, 
      ], 
    }, 
    { path: "team", element: <AboutPage /> }, 
  ]); 
  return element; 
} 


<Routes> 
  <Route path="/" element={<Dashboard />}> 
    <Route 
      path="messages" 
      element={<DashboardMessages />} 
    /> 
    <Route path="tasks" element={<DashboardTasks />} /> 
  </Route> 
  <Route path="about" element={<AboutPage />} /> 
</Routes> 