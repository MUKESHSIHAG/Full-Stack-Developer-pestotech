from flask import request, jsonify, current_app as app
from .models import Task
from . import db

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    new_task = Task(title=data['title'], description=data.get('description', ''), status=data['status'])
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"message": "Task created"}), 201

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{'id': task.id, 'title': task.title, 'description': task.description, 'status': task.status} for task in tasks])

@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    data = request.get_json()
    task = Task.query.get(id)
    if task:
        task.title = data.get('title', task.title)
        task.description = data.get('description', task.description)
        task.status = data.get('status', task.status)
        db.session.commit()
        return jsonify({"message": "Task updated"}), 200
    return jsonify({"message": "Task not found"}), 404

@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    if task:
        db.session.delete(task)
        db.session.commit()
        return jsonify({"message": "Task deleted"}), 200
    return jsonify({"message": "Task not found"}), 404
