const noteUseCase = require("../usecases/noteUsecase");

const createNote = async (req, res) => {
    try {
        const payload = req.body;
        if (!payload.title || !payload.body) {
            return res
                .status(400)
                .json({ message: "Title and body are required" });
        }

        const note = await noteUseCase.createNote(payload);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: "Error creating note", error });
    }
};

const getAllNotes = async (req, res) => {
    try {
        const notes = await noteUseCase.getAllNotes();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error });
    }
};

const getNoteById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Note id is required" });
        }

        const note = await noteUseCase.getNoteById(id);
        if (note) {
            res.status(200).json(note);
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching note", error });
    }
};

const updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Note id is required" });
        }

        const note = await noteUseCase.updateNote(id, req.body);
        if (note[0] === 1) {
            res.status(200).json({ message: "Note updated successfully" });
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating note", error });
    }
};

const deleteNote = async (req, res) => {
    try {
        const result = await noteUseCase.deleteNote(req.params.id);
        if (result) {
            res.status(200).json({ message: "Note deleted successfully" });
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error });
    }
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};
