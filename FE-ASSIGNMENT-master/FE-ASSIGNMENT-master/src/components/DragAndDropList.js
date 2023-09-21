import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import "../CSS/DragAndDropList.css";

const ItemType = "ITEM";

const DraggableItem = ({ id, index, text, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="draggable-item">
      {text}
    </div>
  );
};

const DragAndDropList = () => {
  const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [items, setItems] = useState(initialItems);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div className="drag-and-drop-list">
      <h3>Drag and Drop</h3>
      {items.map((text, index) => (
        <DraggableItem
          key={index}
          id={index}
          index={index}
          text={text}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

export default DragAndDropList;
