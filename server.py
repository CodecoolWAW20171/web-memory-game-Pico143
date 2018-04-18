from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
bootstrap = Bootstrap(app)

@app.route('/')
def home_page():
    render_template('main_site.html')


@app.route('/game',methods=['POST'])
def game():
    render_template('game.html')

if __name__ == '__main__':
    app.secret_key = 'some_key'
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )