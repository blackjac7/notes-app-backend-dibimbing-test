const { Note } = require("../models");

const createNote = async (noteData) => {
    return await Note.create(noteData);
};

const getAllNotes = async () => {
    return await Note.findAll();
};

const getNoteById = async (id) => {
    return await Note.findByPk(id);
};

const updateNote = async (id, updateData) => {
    return await Note.update(updateData, { where: { id } });
};

const deleteNote = async (id) => {
    return await Note.destroy({ where: { id } });
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};
