from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import DevelopmentConfig

db = SQLAlchemy()

def create_app(config_class=DevelopmentConfig):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app)

    db.init_app(app)

    with app.app_context():
        from . import routes  # Import routes to register them
        db.create_all()

    return app
