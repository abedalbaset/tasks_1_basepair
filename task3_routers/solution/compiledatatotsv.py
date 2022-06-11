filename_newrouter="new-router.txt"
filename_oldrouter="old-router.txt"
filename_tsv="routers_ping.tsv"


fi_newrouter = open(filename_newrouter, "r")
fi_oldrouter = open(filename_oldrouter, "r")

linesfile_newrouter = fi_newrouter.readlines()
linesfile_oldrouter = fi_oldrouter.readlines()

fi = open(filename_tsv, "a")
fi.write("icmp_seq	old_router	new_router\n")



for cl in range(1,len(linesfile_oldrouter)-4):
    #print(cl)
    pingtmp1=linesfile_oldrouter[cl].split()[6].split('=')[1]
    pingtmp2=linesfile_newrouter[cl].split()[6].split('=')[1]
    

    fi.write(str(cl-1)+"	"+str(pingtmp1)+"	"+str(pingtmp2)+"\n")




fi.close()



