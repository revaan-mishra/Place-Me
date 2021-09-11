from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np

STATIC_FOLDER = 'template/assets'
app = Flask(__name__, template_folder='template', static_folder=STATIC_FOLDER)

model=pickle.load(open('model.pkl','rb'))


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/predict',methods=['POST','GET'])
def predict():
    int_features=[int(x) for x in request.form.values()]
    final=[np.array(int_features)]
    print(int_features)
    print(final)
    prediction=model.predict_proba(final)
    print(prediction)
    output='{0:.{1}f}'.format(prediction[0][1], 2)
    print(output)
    output_num = float(output) * 100
    if output>str(0.5):
        return render_template('index.html',pred='Probability of getting placed {} %'.format(str(output_num)))
    else:
        return render_template('index.html',pred='Probability of getting placed {} %'.format(str(output_num)))


if __name__ == '__main__':
    app.run(debug=True)

#, host='0.0.0.0'