Agregar un componente nuevo de Redux para almacenar algunos datos de forma persistente.

ssh xj@104.44.129.29
Passw0rddat1..

export GOROOT=/usr/local/go
export GOPATH=$HOME/Projects/ADMFactory/Golang
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH

cd new_hcn/hcn/
export PATH=$PATH:/usr/local/go/bin
sudo systemctl start mongod
go run main.go

http://104.44.129.29:3600/
