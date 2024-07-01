import pytest
import logging
from app import create_app, db

@pytest.fixture(scope='module')
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['WTF_CSRF_ENABLED'] = False

    with app.app_context():
        db.create_all()
        yield app.test_client()
        db.drop_all()

def test_add_task(client):
    # Adding a task
    response = client.post('/tasks', json={
        'title': 'Test Task',
        'description': 'Test Description',
        'status': 'To Do'
    })
    assert response.status_code == 201
    assert response.json['message'] == 'Task created'

def test_get_tasks(client):
    # Adding another task so total tasks will be 2 now
    add_response = client.post('/tasks', json={
        'title': 'Test Task for Get',
        'description': 'Test Description for Get',
        'status': 'To Do'
    })
    assert add_response.status_code == 201

    # Fetching all the tasks
    response = client.get('/tasks')
    assert response.status_code == 200
    assert len(response.json) == 2

def test_update_task(client):
    # Updating the status of Task 1 to Done
    response = client.put('/tasks/1', json={
        'status': 'Done'
    })
    assert response.status_code == 200
    assert response.json['message'] == 'Task updated'

    # Fetching all the tasks
    response = client.get('/tasks')
    # Checking whether the status of Task 1 changed to Done
    assert response.json[0]['status'] == 'Done'

def test_delete_task(client):
    # Deleting a Task, so total task count should be 1 now
    response = client.delete('/tasks/1')
    assert response.status_code == 200
    assert response.json['message'] == 'Task deleted'

    # Fetching all the tasks to check the total tasks
    response = client.get('/tasks')
    assert len(response.json) == 1