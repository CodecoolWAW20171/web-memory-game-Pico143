from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('main_site.html')


@app.route('/game', methods=['POST'])
def game():
    x_length = int(request.form["X"])
    y_length = int(request.form["Y"])
    return render_template('game.html', x_length=x_length, y_length=y_length )


if __name__ == '__main__':
    app.secret_key = 'some_key'
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )
