const noteRepository = require("../repositories/noteRepository");

const createNote = async (noteData) => {
    return await noteRepository.createNote(noteData);
};

const getAllNotes = async () => {
    return await noteRepository.getAllNotes();
};

const getNoteById = async (id) => {
    return await noteRepository.getNoteById(id);
};

const updateNote = async (id, updateData) => {
    return await noteRepository.updateNote(id, updateData);
};

const deleteNote = async (id) => {
    return await noteRepository.deleteNote(id);
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};
