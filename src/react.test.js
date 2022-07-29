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