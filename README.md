# URL Auth: Phishing Website Detection Model & App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Train and Test the Model

1. **Open the Jupyter Notebook:**  
   Use [`Phishing_notebook.ipynb`](Phishing_notebook.ipynb) to explore, preprocess, and analyze the dataset [`url_dataset.csv`](url_dataset.csv).

2. **Train the Model:**  
   Run the cells in the notebook to train various machine learning models on the dataset. The notebook will guide you through data analysis, model training, and evaluation.

3. **Save the Model:**  
   After training, the notebook saves the best-performing model (XGBoost) as `PhishingWebsite_model.pickle.dat` for use in the web application.

4. **Test the Model:**  
   You can test the saved model directly in the notebook or use the web demo below.

---

## How to Run the Application Locally

To run the phishing URL detection app on your own machine:

### 1. Backend Setup (Flask)

- Make sure you have Python 3 and pip installed.
- (Recommended) Create and activate a virtual environment:
  ```sh
  python3 -m venv venv
  source venv/bin/activate
  ```
- Install backend dependencies:
  ```sh
  pip install -r requirements.txt
  ```
- Ensure the trained model file `PhishingWebsite_model.pickle.dat` is present in the project directory.
- Start the Flask backend:
  ```sh
  flask --app server.py run --port=5000
  ```

### 2. Frontend Setup (React)

- Open a new terminal window.
- Navigate to the project directory.
- Install frontend dependencies:
  ```sh
  npm install
  ```
- Start the React frontend:
  ```sh
  npm start
  ```
- The app will open in your browser at [http://localhost:3000](http://localhost:3000).

---

## Live Demo

You can also try the phishing URL detection app instantly (no installation needed) at:  
[https://mehveshshabbir.github.io/url-auth/](https://mehveshshabbir.github.io/url-auth/)
