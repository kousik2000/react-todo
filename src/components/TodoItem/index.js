import './index.css'

// return (
//   <div className="bg-container">
//     <div className="card-container">
//       <h1 className="main-head">Simple Todos</h1>
//       <div className="item-container"></div>
//     </div>
//   </div>
// )

const SimpleTodos = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="item-container">
      <p className="title">{title}</p>
      <div>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default SimpleTodos
