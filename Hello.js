import React from 'react';

const Hello = ({name}) => {
  return <h1>Hello {name}!</h1>
}
// const Hello = ({ name }) => {
//   return <h1>Hello {name}!</h1>
// }
// const Hello = ({ name }) => {
//   return (
//     <h1>Hello {name}!</h1>
//   )
// }
// const Hello = ({ name }) => (
//   <h1>Hello {name}!</h1>
// )
// class Hello extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: props.name
//     }
//   }
//   render() {
//     return (
//       <h1>Hello {this.state.name}!</h1>
//     )
//   }
// }

export default Hello
