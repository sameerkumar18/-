from flask import Flask, request, render_template, send_from_directory

app = Flask(__name__)

@app.route('/',methods=['GET'])
def index():
    return render_template("index.html")


@app.route('/robots.txt')
@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])



if __name__ == "__main__":
    app.run(debug=False)

