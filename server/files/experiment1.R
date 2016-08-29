filename <- 'experiment1'
library(jsonlite)
data_JSON <- fromJSON(paste(filename, '.json', sep=""))
data <- as.data.frame(data_JSON)

experimentgroup_IDs <- data$dataitems.experimentgroup
experimentgroup_names <- data$dataitems.experimentgroup
values <- data$dataitems.value                         

data.parsed <- list()
for( i in 1:length(experimentgroup_IDs)) {
	id <- experimentgroup_IDs[i]
	expgroup_name <- experimentgroup_names[i]
	value <- values[i]
	if(length(data.parsed) < id || is.null(data.parsed[[id]])) {
		data.parsed[[id]] <- list(experimentgroup_name=expgroup_name, value=value)
	} else {
		data.parsed[[id]]$value <- data.parsed[[id]]$value + value
	}
}
values <- list()
experimentgroups <- list()
for(i in 1:length(data.parsed)) {
	if(!is.null(data.parsed[[i]])) {
		values <- c(values, data.parsed[[i]]$value)
		experimentgroups <- c(experimentgroups, i)
	}
}

png(file=paste(filename, '.png', sep=""))
barplot(unlist(values), names.arg = unlist(experimentgroups), xlab = 'Experimentgroup ID', ylab = 'Value', col = 'blue', main = 'Experiment results', border='black')
dev.off()