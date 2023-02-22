import React from "react";

const COMPLETEDGAMES_ENDPOINT = 'https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames'
const BACKLOG_ENDPOINT = 'https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog'
const COMPLETEDNOTES_ENDPOINT = 'https://63ed97a45e9f1583bdb2b798.mockapi.io/final/completedgames/notes'
const BACKLOGNOTES_ENDPOINT = 'https://63ed97a45e9f1583bdb2b798.mockapi.io/final/backlog/notes'

class MockAPIService extends React.Component {

    getCompleted = async () => {
        try {
            const response = await fetch(COMPLETEDGAMES_ENDPOINT);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log('There was an issue.', e);
        }
    }

    getBacklog = async () => {
        try {
            const response = await fetch(BACKLOG_ENDPOINT);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log('There was an issue.', e);
        }
    }

    putCompleted = async (game) => {
        try {
            const response = await fetch(`${COMPLETEDGAMES_ENDPOINT}/${game.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(game)
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to be an issue.', e);
        }
    }

    putBacklog = async (game) => {
        try {
            const response = await fetch(`${BACKLOG_ENDPOINT}/${game.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(game)
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to be an issue.', e);
        }
    }

    deleteCompleted = async (game) => {
        try {
            const response = await fetch(`${COMPLETEDGAMES_ENDPOINT}/${game.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

    deleteBacklog = async (game) => {
        try {
            const response = await fetch(`${BACKLOG_ENDPOINT}/${game.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

    deleteCompletedNote = async (note) => {
        try {
            const response = await fetch(`${COMPLETEDNOTES_ENDPOINT}/${note.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

    deleteBacklogNote = async (note) => {
        try {
            const response = await fetch(`${BACKLOGNOTES_ENDPOINT}/${note.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

    postCompleted = async (game) => {
        try {
            const response = await fetch(COMPLETEDGAMES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(game)
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

    postBacklog = async (game) => {
        try {
            const response = await fetch(BACKLOG_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(game)
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

}

export const mockApiService = new MockAPIService();

