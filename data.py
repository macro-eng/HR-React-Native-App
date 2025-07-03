




# employees=[
#        {
#               "id":1,
#               "name":"Ali",
#               "position":"developer",
#               "skills":["python","django"]
#        },
#        {
#               "id":2,
#               "name":"Sara",
#               "position":"designer",
#               "skills":["figma","photoshop","django"]
#        },
# ]
# new_employee={
#        "id":3,
#        "name":"Sam",
#        "position":"System Analsiser",
#        "skills":["Oracle","Sql Server "]
# }
# if not any(emp["id"] == new_employee["name"] for emp in employees):
#         employees.append(new_employee)
# else:
#        print("employee already exists")

# for emp in employees:
#         print(emp["name"])


# search_skill = "django"
# found = [empl["name"] for empl in employees if search_skill in empl["skills"] ]
# if found:
#         print(f"employees has {search_skill} :",found)
# else:
#         print("لا احد يملك هذا المهارات")

orders = [
        {
        "order_id":1, 
        "customer":{"name":"Ali","city":"Sanna"},
        "items":[{"name":"Book","price":67,"qty":2},{"name":"Pen","price":50,"qty":1}],
        "status":"pending",
        },
       {"order_id":2,
        "customer":{"name":"Sam","city":"Aden"},
        "items":[{"name":"Watch","price":"100","qty":0},{"name":"AEN","price":"240","qty":1}],
        "status":"shipped"
        },      
     ]

search = "Aden"
ords = None
for order in orders:
       totalprice = 0
       name = order["customer"]["name"]
              
       for i,item in enumerate(order["items"]):
              
              if item["qty"] ==0:
                     del order["items"][i]
              if order["customer"]["city"] == search:
                 ords = len(order["items"])

              totalprice +=int(item["price"])
       if order['status'] == 'pending':
              order["status"]="shipped"
       print(f"name  :{name}\n items:{order['items']} \n Total Cost :{totalprice} \n status :{order['status']}")
print("_______________________")
print(f'{search} : {ords}')
#               totalprice = sum(item["price"][i])
# print(f"{order['order_id']} Total Price :{totalprice}")
# students = [
#     {"name":"Ali","grades":{"math":75,"english":87,"science":74}},
#     {"name":"sara","grades":{"math":65,"english":81,"science":34}},
#     {"name":"Jon","grades":{"math":76,"english":77,"science":84}},
#     {"name":"Sam","grades":{"math":78,"english":47,"science":64}},
# ]
# for student in students:
#     grades = student["grades"]
#     avg = sum(grades.values())/len(grades)
#     print(f"{student['name']}'s average:{avg}")
#     if avg>=60:
#         print("Passed")
#         for suject,grade in grades.items():
#                     if grade < 60:
#                            print(f"low grade in {suject}:{grade}")
#     else:
#            print("Failed ")
#     print("_______")