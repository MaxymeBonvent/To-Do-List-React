import React, {useState} from "react"

function ToDoList(){

    // État de la liste de tâches
    const [tasks, setTasks] = useState(["Tâche 1", "Tâche 2", "Tâche 3", "Tâche 4"]);

    // État de la nouvelle tâche
    const [newTask, setNewTask] = useState("");

    // Fonction pour traiter un changement dans la zone de saisie
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    // Fonction d'ajout d'une tâche
    function addTask(){

        // Si le champ de saisie n'est pas vide
        if(newTask.trim() !== "")
        {
            // Ajouter une nouvelle tâche
            setTasks(task => [...task, newTask]);

            // Vider le champ de saisie
            setNewTask("");
        }
    }

    // Fonction de suppression d'une tâche
    function deleteTask(index){

        // Une nouvelle liste contenant toutes les tâches sauf celle cliquée est crée
        const updatedTasks = tasks.filter((_, i) => i !== index);

        // La liste des tâches actuelle est remplacée par la nouvelle liste
        setTasks(updatedTasks);
    }

    // Fonction d'élevation dans la liste d'une tâche
    function moveTaskUp(index){

        // Si la tâche cliquée n'est pas au sommet de la liste
        if(index > 0)
        {
            // Une nouvelle liste est crée
            const updatedTasks = [...tasks];

            // La tâche cliquée est interverti avec celle au-dessus d'elle
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];

            // La liste des tâches actuelle est remplacée par la nouvelle liste
            setTasks(updatedTasks);
        }
    }

    // Fonction de descente dans la liste d'une tâche
    function moveTaskDown(index){

        // Si la tâche cliquée n'est pas au fond de la liste
        if(index < tasks.length-1)
        {
            // Une nouvelle liste est crée
            const updatedTasks = [...tasks];

            // La tâche cliquée est interverti avec celle en-dessous d'elle
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];

            // La liste des tâches actuelle est remplacée par la nouvelle liste
            setTasks(updatedTasks);
        }
    }

    return(
    <div className="grand_conteneur">

        <h1>To-do-list</h1>

        <div id="div_input_btn">
            <input type="text" placeholder="Écrire une tâche..." value={newTask} 
            onChange={handleInputChange} name="tache"/>

            <button className="btn_ajout_tache" title="Ajouter cette tâche" onClick={addTask}>+</button>
        </div>

        {/* Liste de tâches */}
        <ol>
            {tasks.map((task, index) => 
            {
                // Récupération (return) des <li> pour les afficher sur la page
                return  <li key={index}>

                            {/* TÂCHES */}
                            <span className="txt_tache">{task}</span>

                            {/* BOUTONS */}
                            <button className="btn_suppr_tache" title="Supprimer cette tâche" onClick={() => deleteTask(index)}>
                                X
                            </button>

                            <button className="btn_monter_tache" title="Monter cette tâche" onClick={() => moveTaskUp(index)}>
                                &uarr;
                            </button>

                            <button className="btn_desc_tache" title="Descendre cette tâche" onClick={() => moveTaskDown(index)}>
                                &darr;
                            </button>

                        </li>
            })}
        </ol>

    </div>)
}

export default ToDoList