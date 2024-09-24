# import pickle
# model = pickle.load(open("PhishingWebsite_model.pickle.dat", "rb"))
# print(model)

# Re-save the model using the latest version of xgboost
import xgboost as xgb

# Assuming you have your trained model as 'model'
model = xgb.Booster()
model.load_model("PhishingWebsite_model.pickle.dat")  # Load your old model

# Save the model using the latest format
model.save_model("PhishingWebsite_model.json")  # Save in XGBoost's recommended format
