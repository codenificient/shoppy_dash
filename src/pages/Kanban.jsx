import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Header } from "../components";
import { kanbanData, kanbanGrid } from "../data/dummy";

const initialColumns = () => {
  const cols = {};
  kanbanGrid.forEach((col) => {
    cols[col.keyField] = {
      headerText: col.headerText,
      keyField: col.keyField,
      items: kanbanData.filter((d) => d.Status === col.keyField),
    };
  });
  return cols;
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = source.droppableId === destination.droppableId ? sourceItems : [...destCol.items];

    const [moved] = sourceItems.splice(source.index, 1);
    moved.Status = destination.droppableId;
    destItems.splice(destination.index, 0, moved);

    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceCol, items: sourceItems },
      [destination.droppableId]: { ...destCol, items: destItems },
    });
  };

  return (
    <div className="p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10">
      <Header category={"App"} title={"Kanban"} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {kanbanGrid.map((col) => {
            const column = columns[col.keyField];
            return (
              <div key={col.keyField} className="flex-shrink-0 w-64">
                <h3 className="mb-3 font-semibold text-gray-600 uppercase text-xs tracking-wider">
                  {col.headerText} ({column.items.length})
                </h3>
                <Droppable droppableId={col.keyField}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`min-h-[200px] rounded-xl p-2 transition-colors ${
                        snapshot.isDraggingOver ? "bg-blue-50" : "bg-gray-50"
                      }`}
                    >
                      {column.items.map((item, index) => (
                        <Draggable key={item.Id} draggableId={item.Id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-2 rounded-lg bg-white p-3 shadow-sm border border-gray-100 text-sm ${
                                snapshot.isDragging ? "shadow-md" : ""
                              }`}
                            >
                              <p className="font-semibold text-gray-700 text-xs mb-1">{item.Title}</p>
                              <p className="text-gray-500 text-xs">{item.Summary}</p>
                              {item.Assignee && (
                                <p className="text-xs text-gray-400 mt-1">{item.Assignee}</p>
                              )}
                              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: item.Color, color: "#fff" }}>
                                {item.Type}
                              </span>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
