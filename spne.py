import pandas as pd
import statsmodels.api as sm
import pickle
import warnings
warnings.filterwarnings("ignore")


cse = pd.read_csv("student-cse.csv", sep=';')
ece = pd.read_csv("student-ece.csv", sep=';')

# cse.drop('school', inplace=True, axis=1)
# cse.drop('reason', inplace=True, axis=1)

# merge datasets
df = pd.concat([cse,ece])

df.drop('school', inplace=True, axis=1)
df.drop('reason', inplace=True, axis=1)
# rename column labels
df.columns = ['sex','age','address','family_size','parents_status','mother_education','father_education',
           'mother_job','father_job','guardian','commute_time','study_time','failures','school_support',
          'family_support','paid_classes','activities','nursery','desire_higher_edu','internet','romantic','family_quality',
          'free_time','go_out','weekday_alcohol_usage','weekend_alcohol_usage','health','absences','Term1_score','Term2_score','final_score']
          # convert final_score to categorical variable # Good:15~20 fair:10~14 Poor:0~9 (in Lacs)
df['final_grade'] = 'na'
df.loc[(df.final_score >= 15) & (df.final_score <= 20), 'final_grade'] = 'good' 
df.loc[(df.final_score >= 10) & (df.final_score <= 14), 'final_grade'] = 'fair' 
df.loc[(df.final_score >= 0) & (df.final_score <= 9), 'final_grade'] = 'poor' 

# look for missing values
df.isnull().any()

corr = df.corr()

# create dataframe dfd for classification
dfd = df.copy()
dfd = dfd.drop([ 'final_score'], axis=1)

# label encode final_grade
from sklearn import preprocessing
le = preprocessing.LabelEncoder()
dfd.final_grade = le.fit_transform(dfd.final_grade)

# dataset train_test_split
from sklearn.model_selection import train_test_split
X = dfd.drop('final_grade',axis=1)
y = dfd.final_grade
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.30)

# get dummy varibles 
X_train = pd.get_dummies(X_train)
X_test = pd.get_dummies(X_test)

from sklearn.linear_model import LogisticRegression
lr = LogisticRegression(multi_class='multinomial', solver='newton-cg',fit_intercept=True)

# find optimal # of features to use in the model
from sklearn.feature_selection import SelectKBest, chi2

ks=[]
for i in range(1,52):
    sk = SelectKBest(chi2, k=i)
    x_new = sk.fit_transform(X_train,y_train)
    x_new_test=sk.fit_transform(X_test,y_test)
    l = lr.fit(x_new, y_train)
    ll = l.score(x_new_test, y_test)
    ks.append(ll)  
    
ks = pd.Series(ks)
ks = ks.reindex(list(range(1,52)))
ks.where(ks==ks.max()).dropna()

# final model
sk = SelectKBest(chi2, k = 8)
x_new = sk.fit_transform(X_train,y_train)
x_new_test=sk.fit_transform(X_test,y_test)
lr = lr.fit(x_new, y_train)
print("Logistic Regression Model Score" , ":" , lr.score(x_new, y_train) , "," ,
      "Cross Validation Score" ,":" , lr.score(x_new_test, y_test))

selected_feat= X_train.columns[(sk.get_support())]
len(selected_feat)
print(selected_feat)

print(X_train.keys())

# pickle.dump(lr,open('model.pkl','wb'))
# model=pickle.load(open('model.pkl','rb'))
