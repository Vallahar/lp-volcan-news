# -*- coding: utf-8 -*-
"""Public section, including homepage and signup."""
from flask import (
    Blueprint,
    current_app,
    render_template,
    request,
)

blueprint = Blueprint("public", __name__, static_folder="../static")

@blueprint.route("/", methods=["GET", "POST"])
def home():
    """Home page."""
    return render_template("public/home.html")