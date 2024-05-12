// const UIModal = ({ cartData, toggle, visible }) => {
//   if (visible) {
//     return (
//       <div className="uiModalContainer">
//         <button className="closeButton" onClick={toggle}>
//           X
//         </button>
//         <div className="cartItems">
//           {Object.values(cartData).map((elm) => (
//             <div key={elm.info.id} className="cartItem">
//               <span className="title">{elm.info.title}</span>:{" "}
//               <span className="count">{elm.count}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   } else return null;
// };
// export default UIModal;

//====================================================================================

const UIModal = ({ cartData, toggle, visible }) => {
  if (visible) {
    const cartDataArray = Object.values(cartData);
    return (
      <div className="uiModalContainer">
        <button className="closeButton" onClick={toggle}>
          X
        </button>
        <div className="cartItems">
          {cartDataArray.map((item) => (
            <div key={item.info.id} className="cartItem">
              <span className="title">{item.info.title}</span>:{" : "}
              <span className="count">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  } else return null;
};
export default UIModal;
