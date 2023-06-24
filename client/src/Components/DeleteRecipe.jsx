import React from 'react'

function DeleteRecipe({ recipe, confirmDelete, setConfirmDelete, fetchRecipes}) {
  return (
    <div>
      {confirmDelete ? (
        <div>
          <h3>Are you sure you want to delete?</h3>
          <button
            onClick={async () => {
              const response = await fetch(
                "http://localhost:3005/recipe/delete/" + recipe._id,
                {
                  method: "DELETE",
                }
              );
              const data = await response.json();
              console.log(data);
              fetchRecipes();
              setConfirmDelete(!confirmDelete);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setConfirmDelete(!confirmDelete);
            }}
          >
            No
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setConfirmDelete(!confirmDelete);
          }}
        >
          {" "}
          Delete
        </button>
      )}
    </div>
  );
}

export default DeleteRecipe
